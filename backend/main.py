"""PathForge backend API — resume/profile upload and analysis."""

from __future__ import annotations

import os
import traceback

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from backend.extractor import extract_text
from backend.analyzer import analyze_profile

app = FastAPI(title="PathForge API", version="1.0.0")

_origins_env = os.getenv("ALLOWED_ORIGINS", "")
_extra = [o.strip() for o in _origins_env.split(",") if o.strip()]
ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://127.0.0.1:5173",
    *_extra,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB
ALLOWED_EXTENSIONS = {"pdf", "docx", "doc", "txt"}


@app.get("/api/health")
def health():
    return {"status": "ok", "ai": bool(os.getenv("ANTHROPIC_API_KEY"))}


@app.post("/api/upload")
async def upload_resume(file: UploadFile = File(...)):
    # Validate extension
    filename = file.filename or ""
    ext = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file type '.{ext}'. Upload a PDF, DOCX, or TXT file.",
        )

    # Read and validate size
    data = await file.read()
    if len(data) > MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="File too large. Maximum size is 10 MB.")

    if len(data) == 0:
        raise HTTPException(status_code=400, detail="File is empty.")

    try:
        text = extract_text(data, filename)
    except Exception as exc:
        raise HTTPException(status_code=422, detail=f"Could not extract text: {exc}") from exc

    if len(text.strip()) < 50:
        raise HTTPException(
            status_code=422,
            detail="Could not extract enough text from this file. Try a different format.",
        )

    try:
        profile = analyze_profile(text)
    except Exception as exc:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Analysis failed: {exc}") from exc

    return {"status": "success", "profile": profile, "charCount": len(text)}
