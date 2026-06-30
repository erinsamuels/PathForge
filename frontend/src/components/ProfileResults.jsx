import { useState } from "react";
import {
  TrendingUp, Star, Target, Zap, Users, ArrowRight,
  CheckCircle2, AlertCircle, MapPin, Building2, Briefcase,
  GraduationCap, Award, ChevronRight, RefreshCw,
} from "lucide-react";

const CIRC = 2 * Math.PI * 52;

function ScoreRing({ score }) {
  const offset = CIRC - (score / 100) * CIRC;
  return (
    <div className="uploadScoreRing">
      <svg viewBox="0 0 128 128" aria-hidden="true" style={{ transform: "rotate(-90deg)", width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="uploadScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A7048" />
            <stop offset="100%" stopColor="#C98A1C" />
          </linearGradient>
        </defs>
        <circle cx="64" cy="64" r="52" fill="none" stroke="rgba(20,42,26,0.12)" strokeWidth="9" />
        <circle
          cx="64" cy="64" r="52"
          fill="none"
          stroke="url(#uploadScoreGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          style={{ filter: "drop-shadow(0 0 8px rgba(201,138,28,0.40))", transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <div className="uploadScoreCenter">
        <span className="uploadScoreNum">{score}</span>
        <span className="uploadScoreDenom">/ 100</span>
      </div>
    </div>
  );
}

function SkillPill({ children, variant = "default" }) {
  return (
    <span className={`uploadSkillPill uploadSkillPill-${variant}`}>{children}</span>
  );
}

export function ProfileResults({ profile, onReset }) {
  const [expandExp, setExpandExp] = useState(false);

  const {
    name, headline, location,
    education = [], experience = [], skills = [],
    industries = [], leadership = [], achievements = [],
    pathScore = 0, scoreLabel = "", careerSummary = "",
    bestFitRoles = [], skillGaps = [], targetCompanies = [],
    steppingStones = [], nextSteps = [],
  } = profile;

  const visibleExp = expandExp ? experience : experience.slice(0, 2);

  return (
    <div className="uploadResults">

      {/* ── Hero row: name + score + summary ── */}
      <section className="panel uploadHeroPanel">
        <div className="uploadHeroPanelInner">
          <div className="uploadProfileLeft">
            <div className="uploadAvatar">{name.slice(0, 2).toUpperCase()}</div>
            <div>
              <h2 className="uploadProfileName">{name}</h2>
              <p className="uploadProfileHeadline">{headline}</p>
              {location && (
                <p className="uploadProfileLocation">
                  <MapPin size={11} style={{ display: "inline", marginRight: 3 }} />
                  {location}
                </p>
              )}
            </div>
          </div>
          <div className="uploadScoreBlock">
            <ScoreRing score={pathScore} />
            <div className="uploadScoreLabel">{scoreLabel}</div>
          </div>
        </div>

        {careerSummary && (
          <div className="uploadSummaryBox">
            <p className="uploadSummaryText">{careerSummary}</p>
          </div>
        )}

        <button className="uploadResetBtn" onClick={onReset} type="button">
          <RefreshCw size={13} />
          Upload different file
        </button>
      </section>

      {/* ── Two-column: skills + industries / education ── */}
      <div className="uploadTwoCols">

        <section className="panel">
          <div className="panelHeader">
            <div className="panelHeaderLeft">
              <p className="eyebrow">Profile</p>
              <h2>Skills & background</h2>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="detailSection">
              <div className="detailSectionTitle">
                <Zap size={12} style={{ color: "var(--gold)" }} />
                Detected skills
              </div>
              <div className="uploadSkillsWrap">
                {skills.map((s) => <SkillPill key={s}>{s}</SkillPill>)}
              </div>
            </div>
          )}

          {industries.length > 0 && (
            <div className="detailSection">
              <div className="detailSectionTitle">
                <Building2 size={12} style={{ color: "var(--sage)" }} />
                Industries
              </div>
              <div className="uploadSkillsWrap">
                {industries.map((i) => <SkillPill key={i} variant="sage">{i}</SkillPill>)}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div className="detailSection">
              <div className="detailSectionTitle">
                <GraduationCap size={12} style={{ color: "var(--sage)" }} />
                Education
              </div>
              {education.map((ed, i) => (
                <div key={i} className="uploadEduRow">
                  <div className="uploadEduSchool">{ed.school}</div>
                  <div className="uploadEduDegree">{ed.degree}{ed.year ? ` · ${ed.year}` : ""}{ed.gpa ? ` · ${ed.gpa} GPA` : ""}</div>
                </div>
              ))}
            </div>
          )}

          {achievements.length > 0 && (
            <div className="detailSection">
              <div className="detailSectionTitle">
                <Award size={12} style={{ color: "var(--gold)" }} />
                Key achievements
              </div>
              {achievements.map((a, i) => (
                <div key={i} className="uploadAchRow">
                  <Star size={11} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Experience */}
        {experience.length > 0 && (
          <section className="panel">
            <div className="panelHeader">
              <div className="panelHeaderLeft">
                <p className="eyebrow">Career history</p>
                <h2>Work experience</h2>
              </div>
              <div className="panelBadge">{experience.length} roles</div>
            </div>

            {visibleExp.map((exp, i) => (
              <div key={i} className="uploadExpCard">
                <div className="uploadExpHeader">
                  <div>
                    <div className="uploadExpTitle">{exp.title}</div>
                    <div className="uploadExpCompany">
                      <Briefcase size={11} style={{ display: "inline", marginRight: 4 }} />
                      {exp.company}
                      {exp.dates ? ` · ${exp.dates}` : ""}
                    </div>
                  </div>
                  {exp.industry && (
                    <span className="uploadExpIndustry">{exp.industry}</span>
                  )}
                </div>
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="uploadExpBullets">
                    {exp.bullets.slice(0, 3).map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {experience.length > 2 && (
              <button
                type="button"
                className="uploadExpandBtn"
                onClick={() => setExpandExp((v) => !v)}
              >
                {expandExp ? "Show less" : `Show ${experience.length - 2} more roles`}
                <ChevronRight size={13} style={{ transform: expandExp ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
              </button>
            )}
          </section>
        )}
      </div>

      {/* ── Best-fit roles ── */}
      {bestFitRoles.length > 0 && (
        <section className="panel">
          <div className="panelHeader">
            <div className="panelHeaderLeft">
              <p className="eyebrow">Best fit</p>
              <h2>Roles matched to your profile</h2>
            </div>
            <div className="panelBadge panelBadge-gold">{bestFitRoles.length} matches</div>
          </div>
          <div className="uploadRoleGrid">
            {bestFitRoles.map((role, i) => (
              <div key={i} className="uploadRoleCard">
                <div className="uploadRoleHeader">
                  <div>
                    <div className="uploadRoleTitle">{role.title}</div>
                    <div className="uploadRoleCompany">{role.company}</div>
                  </div>
                  <div className="uploadRoleScore">{role.matchScore}%</div>
                </div>
                <p className="uploadRoleFit">{role.fit}</p>
                <div className="uploadRoleBar">
                  <div
                    className="uploadRoleBarFill"
                    style={{ width: `${role.matchScore}%`, animationDelay: `${0.1 + i * 0.08}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Two-column: skill gaps + next steps ── */}
      <div className="uploadTwoCols">

        {skillGaps.length > 0 && (
          <section className="panel">
            <div className="panelHeader">
              <div className="panelHeaderLeft">
                <p className="eyebrow">Skill gaps</p>
                <h2>What to build next</h2>
              </div>
            </div>
            {skillGaps.map((gap, i) => (
              <div key={i} className="uploadGapRow">
                <div className="uploadGapTop">
                  <div className="uploadGapSkill">
                    <AlertCircle size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                    {gap.skill}
                  </div>
                  <span className="uploadGapImpact">{gap.impact}</span>
                </div>
                <p className="uploadGapSuggestion">{gap.suggestion}</p>
              </div>
            ))}
          </section>
        )}

        {nextSteps.length > 0 && (
          <section className="panel">
            <div className="panelHeader">
              <div className="panelHeaderLeft">
                <p className="eyebrow">Action plan</p>
                <h2>Your next moves</h2>
              </div>
            </div>
            <div className="uploadNextSteps">
              {nextSteps.map((step, i) => (
                <div key={i} className="uploadNextStep">
                  <div className="uploadNextStepNum">{i + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── Target companies ── */}
      {targetCompanies.length > 0 && (
        <section className="panel">
          <div className="panelHeader">
            <div className="panelHeaderLeft">
              <p className="eyebrow">Targets</p>
              <h2>Companies to pursue</h2>
            </div>
            <div className="panelBadge">{targetCompanies.length} companies</div>
          </div>
          <div className="companyGrid">
            {targetCompanies.map((co, i) => (
              <article key={i} className="companyCard">
                <div className="companyLogo">{co.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className="companyName">{co.name}</div>
                  <p className="companyFit">{co.fit}</p>
                </div>
                {co.matchScore && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ flex: 1, height: 5, borderRadius: "var(--r-full)", background: "var(--s2)", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", width: `${co.matchScore}%`,
                        background: "linear-gradient(90deg, var(--sage), var(--gold))",
                        borderRadius: "inherit",
                        animation: "barFill 1.2s var(--ease) 0.4s both",
                      }} />
                    </div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--gold)", whiteSpace: "nowrap" }}>{co.matchScore}% fit</span>
                  </div>
                )}
                {co.roleType && (
                  <div className="companyMeta">
                    <div className="companyMetaLabel">Role types</div>
                    <div className="companyMetaVal">{co.roleType}</div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── Stepping stones ── */}
      {steppingStones.length > 0 && (
        <section className="panel">
          <div className="panelHeader">
            <div className="panelHeaderLeft">
              <p className="eyebrow">Journey map</p>
              <h2>Stepping-stone roles</h2>
            </div>
          </div>
          <div className="uploadStonesRow">
            {steppingStones.map((stone, i) => (
              <div key={i} className="uploadStoneCard">
                <div className="uploadStoneStep">{i + 1}</div>
                <div className="uploadStoneContent">
                  <div className="uploadStoneRole">{stone.role}</div>
                  <p className="uploadStoneDesc">{stone.description}</p>
                  {stone.timeframe && (
                    <span className="uploadStoneTime">{stone.timeframe}</span>
                  )}
                </div>
                {i < steppingStones.length - 1 && (
                  <ArrowRight size={16} className="uploadStoneArrow" />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Leadership ── */}
      {leadership.length > 0 && (
        <section className="panel">
          <div className="panelHeader">
            <div className="panelHeaderLeft">
              <p className="eyebrow">Leadership</p>
              <h2>Impact signals</h2>
            </div>
          </div>
          <div className="uploadLeadershipList">
            {leadership.map((item, i) => (
              <div key={i} className="uploadLeadershipRow">
                <CheckCircle2 size={14} style={{ color: "var(--sage)", flexShrink: 0, marginTop: 1 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
