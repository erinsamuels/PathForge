"""Career profile analysis via Claude API with pattern-based fallback."""

import json
import os
import re


SYSTEM_PROMPT = """You are a career intelligence engine for PathForge, a premium career navigation platform.

Analyze the provided resume or LinkedIn profile text and return a structured JSON object.
Return ONLY valid JSON — no markdown, no explanation, no code fences.

The JSON must have this exact structure:
{
  "name": "Full Name",
  "headline": "Short professional headline",
  "location": "City, State or Remote",
  "education": [
    { "school": "...", "degree": "...", "year": "...", "gpa": "" }
  ],
  "experience": [
    {
      "company": "...",
      "title": "...",
      "dates": "...",
      "industry": "...",
      "bullets": ["...", "..."]
    }
  ],
  "skills": ["skill1", "skill2"],
  "industries": ["industry1"],
  "leadership": ["leadership example 1"],
  "achievements": ["achievement 1"],
  "careerInterests": ["interest 1", "interest 2"],
  "keywords": ["keyword1", "keyword2"],
  "pathScore": 74,
  "scoreLabel": "Strong trajectory",
  "careerSummary": "2-3 sentence summary of the person's career trajectory and strongest angles.",
  "bestFitRoles": [
    { "title": "Role Title", "company": "Company Name", "fit": "Why this fits", "matchScore": 82 }
  ],
  "skillGaps": [
    { "skill": "Skill Name", "impact": "+5 pts", "suggestion": "How to address it" }
  ],
  "targetCompanies": [
    { "name": "Company", "fit": "Why it fits", "roleType": "Role types available", "matchScore": 85 }
  ],
  "steppingStones": [
    { "role": "Intermediate role", "description": "Why this bridges the gap", "timeframe": "~6 months" }
  ],
  "nextSteps": [
    "Specific action 1",
    "Specific action 2",
    "Specific action 3",
    "Specific action 4"
  ]
}

Rules:
- pathScore is 0-100 representing career readiness and trajectory alignment
- scoreLabel is one of: "Excellent trajectory", "Strong trajectory", "Developing trajectory", "Early-stage trajectory"
- Provide 2-4 bestFitRoles based on actual experience
- Provide 3-5 skillGaps that would most improve the path score
- Provide 2-4 targetCompanies that are realistic and aspirational
- Provide 1-3 steppingStones (intermediate roles before the target)
- Provide 4-5 specific, actionable nextSteps
- Base all analysis on actual content in the document
- If something cannot be determined, use an empty string or empty array"""


def analyze_profile(text: str) -> dict:
    """Analyze resume/profile text and return structured career profile."""
    api_key = os.getenv("ANTHROPIC_API_KEY")

    if api_key:
        return _analyze_with_claude(text, api_key)
    return _analyze_with_fallback(text)


def _analyze_with_claude(text: str, api_key: str) -> dict:
    import anthropic

    client = anthropic.Anthropic(api_key=api_key)

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": f"Analyze this resume/profile and return the structured JSON:\n\n{text[:12000]}",
            }
        ],
    )

    raw = message.content[0].text.strip()

    # Strip markdown fences if present
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)

    return json.loads(raw)


def _analyze_with_fallback(text: str) -> dict:
    """Pattern-based fallback when no Claude API key is set."""
    lower = text.lower()

    # --- Name: first non-empty line that looks like a name ---
    name = "Resume Upload"
    for line in text.splitlines():
        line = line.strip()
        if line and len(line.split()) in (2, 3) and line[0].isupper():
            name = line
            break

    # --- Skills detection (whole-word matching to avoid false positives) ---
    skill_keywords = [
        "Python", "Java", "JavaScript", "TypeScript", "React", "SQL",
        "SolidWorks", "CAD", "AutoCAD", "MATLAB", "Swift",
        "Manufacturing", "Root Cause Analysis", "DFMEA", "APQP", "Lean",
        "Six Sigma", "Project Management", "Leadership", "Excel", "AWS",
        "Machine Learning", "TensorFlow", "PyTorch", "Kubernetes", "Docker",
        "Agile", "Scrum", "Battery", "Automotive", "Mechanical Design",
        "Process Engineering", "Quality", "SPC", "GD&T",
    ]
    def _has_skill(skill: str) -> bool:
        pattern = r"\b" + re.escape(skill) + r"\b"
        return bool(re.search(pattern, text, re.IGNORECASE))

    skills = [s for s in skill_keywords if _has_skill(s)]

    # --- Industries ---
    industry_map = {
        "automotive": "Automotive",
        "electric vehicle": "Electric Vehicles",
        " ev ": "Electric Vehicles",
        "manufacturing": "Manufacturing",
        "software": "Software",
        "tech": "Technology",
        "finance": "Finance",
        "healthcare": "Healthcare",
        "energy": "Energy",
        "aerospace": "Aerospace",
        "defense": "Defense",
        "consulting": "Consulting",
    }
    industries = list({v for k, v in industry_map.items() if k in lower})

    # --- Score (capped at 82 — 100 is reserved for AI-analyzed profiles) ---
    score = min(40 + len(skills) * 3 + len(industries) * 4, 82)
    if score >= 85:
        label = "Excellent trajectory"
    elif score >= 70:
        label = "Strong trajectory"
    elif score >= 55:
        label = "Developing trajectory"
    else:
        label = "Early-stage trajectory"

    return {
        "name": name,
        "headline": "Professional",
        "location": "",
        "education": [],
        "experience": [],
        "skills": skills[:12],
        "industries": industries,
        "leadership": [],
        "achievements": [],
        "careerInterests": [],
        "keywords": skills[:6],
        "pathScore": score,
        "scoreLabel": label,
        "careerSummary": (
            f"Profile detected with {len(skills)} skills across {len(industries) or 1} industry areas. "
            "Set ANTHROPIC_API_KEY for a full AI-powered analysis."
        ),
        "bestFitRoles": [
            {
                "title": "Engineer",
                "company": "TBD",
                "fit": "Based on detected skills",
                "matchScore": score,
            }
        ],
        "skillGaps": [
            {
                "skill": "AI Analysis",
                "impact": "N/A",
                "suggestion": "Set ANTHROPIC_API_KEY for personalized skill gap analysis.",
            }
        ],
        "targetCompanies": [],
        "steppingStones": [],
        "nextSteps": [
            "Set ANTHROPIC_API_KEY to unlock full AI career analysis.",
            "Review extracted skills and ensure your resume is complete.",
            "Upload a more detailed resume for better pattern matching.",
        ],
    }
