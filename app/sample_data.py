"""Sample data for PathForge."""

from app.models.company import Company
from app.models.experience import Experience, ExperienceType
from app.models.person import Person


def build_erin() -> Person:
    """Create Erin's profile."""

    erin = Person(
        person_id="P001",
        full_name="Erin Samuels",
        professional_summary="Mechanical Engineering student passionate about EV manufacturing.",
        location="Blacksburg, VA",
        is_primary_user=True,
        skills=[
            "CAD",
            "Python",
            "Manufacturing",
            "Root Cause Analysis",
            "Project Management",
        ],
        target_company="Rivian",
    )

    vt = Company(
        company_id="C001",
        name="Virginia Tech",
        industry="Higher Education",
        size_category="University",
        headquarters_location="Blacksburg, VA",
    )

    hevt = Company(
        company_id="C002",
        name="Hybrid Electric Vehicle Team",
        industry="Student Engineering",
        size_category="Student Team",
        headquarters_location="Blacksburg, VA",
    )

    dupont = Company(
        company_id="C003",
        name="DuPont",
        industry="Manufacturing",
        size_category="Enterprise",
        headquarters_location="Richmond, VA",
    )

    erin.experiences = [
        Experience(
            experience_id="E001",
            person=erin,
            company=vt,
            raw_title="Mechanical Engineering Student",
            normalized_title="Mechanical Engineering Student",
            experience_type=ExperienceType.EDUCATION,
            start_date="2023-08",
        ),
        Experience(
            experience_id="E002",
            person=erin,
            company=hevt,
            raw_title="HEVT Member",
            normalized_title="Engineering Project",
            experience_type=ExperienceType.PROJECT,
            start_date="2023-09",
        ),
        Experience(
            experience_id="E003",
            person=erin,
            company=dupont,
            raw_title="Mechanical Engineering Co-op",
            normalized_title="Mechanical Engineering Co-op",
            experience_type=ExperienceType.CO_OP,
            start_date="2026-05",
        ),
    ]

    return erin


def build_sarah() -> Person:
    """Create a sample career match."""

    sarah = Person(
        person_id="P002",
        full_name="Sarah Chen",
        professional_summary="Manufacturing Engineer",
        location="Irvine, CA",
        skills=[
            "CAD",
            "Manufacturing",
            "Root Cause Analysis",
            "Battery Manufacturing",
            "DFMEA",
        ],
        target_company="Rivian",
    )

    return sarah


def get_sample_person() -> Person:
    return build_erin()


def get_sample_people() -> list[Person]:
    return [
        build_sarah(),
    ]