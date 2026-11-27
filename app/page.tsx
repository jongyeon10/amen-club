/* ───────── 여기 내용만 고치면 사이트 글이 바뀌어요 ───────── */

// 유튜브 영상 주소(youtu.be/ 뒤에 오는 부분)
const YOUTUBE_ID = "tC4wArfEI2E";

const meaning = [
  { en: "AI", ko: "인공지능" },
  { en: "Mathematics", ko: "수학" },
  { en: "Engineering", ko: "공학" },
  { en: "Navigator", ko: "문제 해결자" },
];

const teams = [
  { icon: "</>", title: "SW 분과", full: "Software · 소프트웨어", desc: "코딩과 AI로 아이디어를 구현해요." },
  { icon: "⚙", title: "HW 분과", full: "Hardware · 하드웨어", desc: "아두이노와 센서로 직접 만들어요." },
  { icon: "∑", title: "NS 분과", full: "Natural Science · 자연과학", desc: "수학과 과학으로 원리를 탐구해요." },
];

// 조직도 (직책만 표시해요)
const org = {
  top: ["회장", "부회장"],
  teams: [
    { lead: "SW 분과장", desc: "SW 분과원" },
    { lead: "HW 분과장", desc: "HW 분과원" },
    { lead: "NS 분과장", desc: "NS 분과원" },
  ],
};

// 진행한 활동 — 설명(desc)은 비워 둬도 돼요
// 예: { year: "2025", title: "활동 이름", desc: "한 줄 설명" },
const activities: { year: string; title: string; desc?: string }[] = [
  { year: "2025", title: "주말과학체험부스", desc: "주말에 과학 체험 부스를 운영했어요." },
  { year: "2025", title: "대신 사이언스 챌린지 주최", desc: "교내 과학 대회를 직접 열었어요." },
  { year: "2025", title: "Club Quest" },
  { year: "2025", title: "해양 업사이클링 대회" },
  { year: "2025", title: "아두이노 & Python", desc: "아두이노와 파이썬을 함께 배웠어요." },
  { year: "2025", title: "Fusion 360", desc: "Fusion 360으로 3D 모델링을 했어요." },
];

// 동아리 실적 — 적으면 빈칸 대신 목록으로 보여요
// 예: { year: "2026", title: "대회 이름", award: "수상 내역" },
const achievements: { year: string; title: string; award: string }[] = [];

const lookingFor = [
  "코딩, 아두이노, 수학 중 하나라도 관심 있는 친구",
  "직접 만들어 보면서 배우고 싶은 친구",
  "팀원과 함께 문제를 풀어 가는 걸 좋아하는 친구",
];

/* ─────────────────────────────────────────────── */

export default function Home() {
  const marquee = [...meaning, ...meaning, ...meaning, ...meaning];

  return (
    <main>
      <header className="header">
        <a className="logo" href="#">
          A.M.E.N<span>.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#teams">분과</a>
          <a href="#org">조직도</a>
          <a href="#activities">활동</a>
          <a href="#achievements">실적</a>
          <a href="#recruit">모집</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <h1>
            AI · Mathematics
            <br />
            Engineering · Navigator<span>.</span>
          </h1>
          <p>대전대신고등학교 수학·공학 동아리 A.M.E.N.</p>
        </div>
        <a className="scroll" href="#about" aria-label="아래로">
          ↓
        </a>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marquee.map((m, i) => (
            <span key={i} className="pill">
              <b>{m.en[0]}</b>
              {m.en}
              <small>{m.ko}</small>
            </span>
          ))}
        </div>
      </div>

      <section className="section" id="about">
        <h2 className="title">
          About<span>.</span>
        </h2>
        <p className="lead">
          A.M.E.N.은 AI, 수학, 공학을 바탕으로 문제를 찾아 해결하는 대신고 동아리예요. 코딩과
          하드웨어, 수학·과학 탐구를 함께하며 아이디어를 직접 만들어 봐요.
        </p>
        <div className="video">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="A.M.E.N. 동아리 소개 영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section" id="teams">
        <h2 className="title">
          Teams<span>.</span>
        </h2>
        <p className="lead">세 분과로 나뉘어 각자 관심 있는 분야를 깊게 파고들어요.</p>
        <div className="cards">
          {teams.map((t) => (
            <article key={t.title} className="card">
              <div className="card-icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p className="card-full">{t.full}</p>
              <p>{t.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="org">
        <h2 className="title">
          Organization<span>.</span>
        </h2>
        <p className="lead">회장단이 동아리를 이끌고 분과장이 각 분과 활동을 맡아요.</p>
        <div className="org">
          <div className="org-top">
            {org.top.map((r, i) => (
              <div key={r} className={i === 0 ? "org-box org-main" : "org-box"}>
                {r}
              </div>
            ))}
          </div>
          <div className="org-teams">
            {org.teams.map((t) => (
              <div key={t.lead} className="org-col">
                <div className="org-box org-lead">{t.lead}</div>
                <div className="org-box org-member">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="activities">
        <h2 className="title">
          Activities<span>.</span>
        </h2>
        <p className="lead">A.M.E.N.이 지금까지 해 온 활동이에요.</p>
        <div className="cards">
          {activities.length > 0
            ? activities.map((a) => (
                <article key={a.title} className="card">
                  <span className="card-year">{a.year}</span>
                  <h3>{a.title}</h3>
                  {a.desc && <p>{a.desc}</p>}
                </article>
              ))
            : [1, 2, 3].map((n) => (
                <article key={n} className="card card-empty">
                  <p>활동 내용이 곧 채워질 예정이에요.</p>
                </article>
              ))}
        </div>
      </section>

      <section className="section" id="achievements">
        <h2 className="title">
          Achievements<span>.</span>
        </h2>
        <p className="lead">A.M.E.N. 부원들이 함께 만든 결과예요.</p>
        <div className="achieve">
          {achievements.length > 0 ? (
            achievements.map((a) => (
              <div key={a.year + a.title} className="achieve-row">
                <span className="achieve-year">{a.year}</span>
                <span className="achieve-title">{a.title}</span>
                <span className="achieve-award">{a.award}</span>
              </div>
            ))
          ) : (
            <div className="achieve-row achieve-empty">실적이 곧 채워질 예정이에요.</div>
          )}
        </div>
      </section>

      <section className="section" id="recruit">
        <h2 className="title">
          Recruiting<span>.</span>
        </h2>
        <div className="recruit">
          <p className="recruit-head">우리는 이런 친구를 찾고 있어요.</p>
          <ul>
            {lookingFor.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <p className="recruit-quote">열정과 패기만 있다면 누구나 환영해요.</p>
          <p className="recruit-together">
            Together with <span>A.M.E.N.</span>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="footer-logo">A.M.E.N.</p>
          <p>대전대신고등학교 수학·공학 동아리</p>
        </div>
        <div className="footer-right">
          <p>지도교사 신환용 선생님</p>
          <p>© A.M.E.N. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
