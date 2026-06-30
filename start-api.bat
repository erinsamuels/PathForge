@echo off
echo Starting PathForge API on http://localhost:8000
echo Set ANTHROPIC_API_KEY for full AI analysis (optional)
echo.
.venv\Scripts\uvicorn.exe backend.main:app --host 0.0.0.0 --port 8000 --reload
