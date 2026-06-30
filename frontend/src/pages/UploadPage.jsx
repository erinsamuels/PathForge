import { useState } from "react";
import { UploadZone } from "../components/UploadZone";
import { ProfileResults } from "../components/ProfileResults";

const STEPS = [
  { id: "uploading",  label: "Uploading file",          sub: "Sending to PathForge..." },
  { id: "extracting", label: "Extracting text",          sub: "Reading your document..." },
  { id: "analyzing",  label: "Analyzing career profile", sub: "Finding patterns and signals..." },
  { id: "generating", label: "Generating insights",      sub: "Building your path score..." },
];

function LoadingState({ stepIdx, fileName }) {
  return (
    <div className="uploadLoadingWrap">
      <div className="uploadLoadingCard">
        <div className="uploadLoadingTitle">Analyzing your profile</div>
        <div className="uploadLoadingFile">{fileName}</div>

        <div className="uploadSteps">
          {STEPS.map((step, i) => {
            const done   = i < stepIdx;
            const active = i === stepIdx;
            return (
              <div key={step.id} className={`uploadStep ${done ? "done" : ""} ${active ? "active" : ""}`}>
                <div className="uploadStepDot">
                  {done && (
                    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {active && <div className="uploadStepSpinner" />}
                </div>
                <div>
                  <div className="uploadStepLabel">{step.label}</div>
                  {active && <div className="uploadStepSub">{step.sub}</div>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="uploadLoadingBar">
          <div
            className="uploadLoadingBarFill"
            style={{ width: `${Math.round(((stepIdx + 1) / STEPS.length) * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function UploadPage() {
  const [state, setState] = useState("idle"); // idle | loading | done | error
  const [stepIdx, setStepIdx] = useState(0);
  const [fileName, setFileName] = useState("");
  const [profile, setProfile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleUpload(file) {
    setState("loading");
    setStepIdx(0);
    setFileName(file.name);
    setErrorMsg("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setStepIdx(0); // uploading
      await delay(400);
      setStepIdx(1); // extracting

      const apiBase = import.meta.env.VITE_API_URL ?? "";
      const res = await fetch(`${apiBase}/api/upload`, {
        method: "POST",
        body: formData,
      });

      setStepIdx(2); // analyzing
      await delay(600);
      setStepIdx(3); // generating
      await delay(500);

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "Upload failed." }));
        throw new Error(err.detail ?? "Upload failed.");
      }

      const data = await res.json();
      setProfile(data.profile);
      setState("done");
    } catch (err) {
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
      setState("error");
    }
  }

  function handleReset() {
    setState("idle");
    setProfile(null);
    setStepIdx(0);
    setErrorMsg("");
  }

  if (state === "loading") {
    return <LoadingState stepIdx={stepIdx} fileName={fileName} />;
  }

  if (state === "error") {
    return (
      <div className="uploadErrorWrap">
        <div className="uploadErrorCard">
          <div className="uploadErrorIcon">!</div>
          <div className="uploadErrorTitle">Analysis failed</div>
          <p className="uploadErrorMsg">{errorMsg}</p>
          <button className="headerBtn headerBtn-primary" onClick={handleReset} type="button">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (state === "done" && profile) {
    return <ProfileResults profile={profile} onReset={handleReset} />;
  }

  return <UploadZone onUpload={handleUpload} loading={state === "loading"} />;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
