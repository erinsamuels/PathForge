"""Streamlit web interface for PathForge."""

import streamlit as st

st.set_page_config(
    page_title="PathForge",
    page_icon="🧭",
    layout="wide",
)

st.markdown(
    """
    <style>
    .stApp {
        background: #07111f;
    }

    .block-container {
        padding-top: 1.5rem;
        padding-bottom: 3rem;
    }

    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        padding: 0.5rem 0 1.5rem 0;
    }

    .brand {
        font-size: 2rem;
        font-weight: 800;
    }

    .brand span {
        color: #22c55e;
    }

    .nav {
        color: #cbd5e1;
        font-weight: 600;
    }

    .hero {
        background: #ffffff;
        color: #0f172a;
        padding: 2rem;
        border-radius: 22px;
        margin-bottom: 2rem;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
    }

    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: #0f172a;
    }

    .hero p {
        color: #475569;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .section-title {
        color: white;
        font-size: 1.35rem;
        font-weight: 800;
        margin: 1.75rem 0 1rem 0;
    }

    .card {
        background: #ffffff;
        color: #0f172a;
        border-radius: 20px;
        padding: 1.5rem;
        min-height: 190px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
    }

    .card-label {
        color: #64748b;
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
    }

    .card-title {
        color: #0f172a;
        font-size: 1.75rem;
        font-weight: 800;
        margin-bottom: 0.25rem;
    }

    .card-subtitle {
        color: #15803d;
        font-weight: 800;
        font-size: 1.05rem;
        margin-bottom: 0.75rem;
    }

    .card-text {
        color: #334155;
        font-size: 0.98rem;
        line-height: 1.5;
    }

    .score {
        color: #059669;
        font-size: 3.75rem;
        font-weight: 900;
        line-height: 1;
        margin-bottom: 0.5rem;
    }

    .panel {
        background: #ffffff;
        color: #0f172a;
        border-radius: 20px;
        padding: 1.5rem;
        border: 1px solid #e2e8f0;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
    }

    .timeline {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
        line-height: 2;
    }

    .pill {
        display: inline-block;
        background: #dcfce7;
        color: #166534;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        font-weight: 800;
        font-size: 0.9rem;
        margin-top: 0.3rem;
    }

    .gap {
        color: #0f172a;
        font-weight: 700;
        margin-bottom: 0.9rem;
    }

    .gap span {
        color: #dc2626;
        font-weight: 800;
    }

    .action {
        color: #0f172a;
        font-weight: 700;
        margin-bottom: 0.9rem;
    }

    .action span {
        color: #16a34a;
        font-weight: 900;
    }

    label, .stSelectbox label, .stFileUploader label {
        color: #0f172a !important;
        font-weight: 700 !important;
    }

    .stButton > button {
        background: #16a34a;
        color: white;
        border: none;
        border-radius: 12px;
        padding: 0.75rem 1rem;
        font-weight: 800;
    }

    .stButton > button:hover {
        background: #15803d;
        color: white;
    }
    </style>
    """,
    unsafe_allow_html=True,
)

st.markdown(
    """
    <div class="top-bar">
        <div class="brand">🧭 Path<span>Forge</span></div>
        <div class="nav">Dashboard &nbsp;&nbsp; Simulator &nbsp;&nbsp; Insights &nbsp;&nbsp; Network</div>
    </div>
    """,
    unsafe_allow_html=True,
)

st.markdown(
    """
    <div class="hero">
        <h1>Navigate your career with confidence.</h1>
        <p>
            Upload your resume, choose your dream destination, and discover the
            paths others took to get there.
        </p>
    </div>
    """,
    unsafe_allow_html=True,
)

input_left, input_right = st.columns([1, 1])

with input_left:
    dream_company = st.selectbox(
        "Where do you want to end up?",
        ["Rivian", "Tesla", "Lucid", "SpaceX", "Apple", "BorgWarner", "Bosch"],
    )

with input_right:
    uploaded_resume = st.file_uploader(
        "Upload your resume",
        type=["txt", "pdf", "docx"],
    )

analyze = st.button("Analyze My Career", use_container_width=True)

if analyze:
    if uploaded_resume is None:
        st.warning("Please upload a resume first.")
    else:
        st.markdown('<div class="section-title">Your Path Dashboard</div>', unsafe_allow_html=True)

        score_card, match_card, step_card = st.columns(3)

        with score_card:
            st.markdown(
                """
                <div class="card">
                    <div class="card-label">Path Score</div>
                    <div class="score">88</div>
                    <div class="card-subtitle">Strong trajectory</div>
                    <div class="card-text">
                        You are aligned with early EV manufacturing paths.
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        with match_card:
            st.markdown(
                """
                <div class="card">
                    <div class="card-label">Best Career Match</div>
                    <div class="card-title">Sarah Chen</div>
                    <div class="card-subtitle">Manufacturing Engineer</div>
                    <div class="pill">91% Match</div>
                    <div class="card-text">
                        Shared manufacturing, CAD, and root-cause background.
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        with step_card:
            st.markdown(
                """
                <div class="card">
                    <div class="card-label">Recommended Next Step</div>
                    <div class="card-title">BorgWarner</div>
                    <div class="card-subtitle">Manufacturing Engineering</div>
                    <div class="pill">74% Confidence</div>
                    <div class="card-text">
                        Strong stepping-stone toward EV OEM roles.
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        st.markdown('<div class="section-title">Career Navigation</div>', unsafe_allow_html=True)

        timeline_col, gaps_col, actions_col = st.columns([1.25, 1, 1])

        with timeline_col:
            st.markdown(
                f"""
                <div class="panel">
                    <div class="card-label">Career Timeline</div>
                    <div class="timeline">
                        Virginia Tech → HEVT → DuPont → ? → {dream_company}
                    </div>
                    <br>
                    <div class="card-text">
                        Your journey is still being forged. PathForge helps identify the
                        highest-value next step.
                    </div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        with gaps_col:
            st.markdown(
                """
                <div class="panel">
                    <div class="card-label">Top Skill Gaps</div>
                    <div class="gap"><span>+4 pts</span> DFMEA</div>
                    <div class="gap"><span>+3 pts</span> APQP</div>
                    <div class="gap"><span>+3 pts</span> Battery Manufacturing</div>
                </div>
                """,
                unsafe_allow_html=True,
            )

        with actions_col:
            st.markdown(
                """
                <div class="panel">
                    <div class="card-label">Recommended Actions</div>
                    <div class="action"><span>✓</span> Learn DFMEA fundamentals</div>
                    <div class="action"><span>✓</span> Explore Tier 1 suppliers</div>
                    <div class="action"><span>✓</span> Connect with EV alumni</div>
                </div>
                """,
                unsafe_allow_html=True,
            )
else:
    st.info("Upload a resume and choose a dream company to begin.")