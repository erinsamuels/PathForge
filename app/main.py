"""PathForge — AI Career Intelligence Platform.

Application entry point.
"""

from app.services.resume_parser import load_resume
from app.services.person_builder import build_person_from_resume
from app.services.data_loader import load_people_from_json
from app.services.search import find_best_match
from app.services.path_score import calculate_path_score

APP_VERSION = "0.1.0"


def main() -> None:
    """Run the PathForge application."""

    print("=" * 40)
    print("            PathForge")
    print("=" * 40)
    print()

    print("Loading Resume...")
    resume_text = load_resume("uploads/sample_resume.txt")
    print("✓ Resume Loaded")
    print()

    person = build_person_from_resume(resume_text)

    print(f"Welcome {person.full_name}")
    print()

    print("Detected Skills")
    print("-" * 30)

    for skill in person.skills:
        print(f"✓ {skill}")

    print()

    print("Searching Career Database...")
    candidates = load_people_from_json("data/careers.json")
    print(f"Found {len(candidates)} Career Paths")
    print()

    best_match, _ = find_best_match(person, candidates)

    score = calculate_path_score(person, best_match)

    print("Best Match")
    print("-" * 30)
    print(best_match.full_name)
    print()

    print("Path Score")
    print("-" * 30)
    print(f"{score.score}/100")
    print(score.rating)

    print()
    print("Top Strengths")
    print("-" * 30)

    for strength in score.strengths:
        print(f"✓ {strength}")

    print()

    print("Top Improvements")
    print("-" * 30)

    for improvement in score.improvements:
        print(f"+ {improvement}")

    print()
    print(f"Version {APP_VERSION}")


if __name__ == "__main__":
    main()