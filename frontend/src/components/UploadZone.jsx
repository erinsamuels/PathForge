import { useRef, useState } from "react";
import { Upload, FileText, Link2, File } from "lucide-react";

const ACCEPT = ".pdf,.docx,.doc,.txt";

const uploadTypes = [
  {
    id: "resume-pdf",
    icon: FileText,
    label: "Resume",
    sub: "PDF or DOCX",
    accept: ".pdf,.docx,.doc",
    hint: "Standard resume — any format",
  },
  {
    id: "linkedin-pdf",
    icon: Link2,
    label: "LinkedIn",
    sub: "Save as PDF",
    accept: ".pdf",
    hint: 'Profile → "Save to PDF"',
  },
  {
    id: "any",
    icon: File,
    label: "Any file",
    sub: "PDF, DOCX, TXT",
    accept: ACCEPT,
    hint: "Drop it here",
  },
];

export function UploadZone({ onUpload, loading }) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  function handleFile(file) {
    if (!file || loading) return;
    onUpload(file);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function handleChange(e) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  return (
    <div className="uploadPageOuter">
      <div className="uploadHero">
        <p className="eyebrow">PathForge Import</p>
        <h1 className="uploadHeroTitle">Tell PathForge your story</h1>
        <p className="uploadHeroSub">
          Upload your resume or LinkedIn PDF. PathForge extracts your full
          career profile and generates a personalized path score, skill gap
          analysis, target companies, and next steps — in seconds.
        </p>
      </div>

      {/* Type cards */}
      <div className="uploadTypeGrid">
        {uploadTypes.map(({ id, icon: Icon, label, sub, accept, hint }) => (
          <button
            key={id}
            type="button"
            className="uploadTypeCard"
            disabled={loading}
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.accept = accept;
                inputRef.current.click();
              }
            }}
          >
            <div className="uploadTypeIcon">
              <Icon size={22} />
            </div>
            <div className="uploadTypeLabel">{label}</div>
            <div className="uploadTypeSub">{sub}</div>
            <div className="uploadTypeHint">{hint}</div>
          </button>
        ))}
      </div>

      {/* Drag-and-drop zone */}
      <div
        className={`uploadDropZone ${dragOver ? "dragOver" : ""} ${loading ? "uploadDropZone-loading" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        aria-label="Drop your file here"
        onClick={() => !loading && inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click(); }}
      >
        <Upload size={28} className="uploadDropIcon" />
        <div className="uploadDropText">
          {dragOver ? "Drop to analyze" : "Drag & drop your file here"}
        </div>
        <div className="uploadDropSub">or click any card above · PDF, DOCX, TXT · max 10 MB</div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        style={{ display: "none" }}
        onChange={handleChange}
      />

      <div className="uploadPrivacyNote">
        Files are analyzed immediately and never stored. Your data stays private.
      </div>
    </div>
  );
}
