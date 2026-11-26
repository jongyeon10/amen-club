const meaning = [
  { en: "AI", ko: "인공지능" },
  { en: "Mathematics", ko: "수학" },
  { en: "Engineering", ko: "공학" },
  { en: "Navigator", ko: "문제 해결자" },
];

const teams = [
  { title: "SW 분과", desc: "코딩과 AI로 아이디어를 구현해요." },
  { title: "HW 분과", desc: "아두이노와 센서로 직접 만들어요." },
  { title: "NS 분과", desc: "수학과 과학으로 원리를 탐구해요." },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="#">A.M.E.N.</a>
        <nav>
          <a href="#about">소개</a>
        </nav>
      </header>

      <section className="hero">
        <p className="label">우리 동아리를 소개합니다</p>
        <h1>
          대신고 수학·공학 동아리,<br />
          <span>A.M.E.N.</span>
        </h1>
        <p className="description">AI · Mathematics · Engineering · Navigator</p>
        <a className="button" href="#about">더 알아보기 ↓</a>
      </section>

      <section className="section" id="about">
        <p className="label">ABOUT US</p>
        <h2>우리는 이런 동아리예요.</h2>

        <h3 className="sub-title">이름의 뜻</h3>
        <div className="tags">
          {meaning.map((m) => (
            <span key={m.en}>
              <b>{m.en}</b> {m.ko}
            </span>
          ))}
        </div>

        <h3 className="sub-title">분과</h3>
        <div className="cards">
          {teams.map((t) => (
            <article key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </article>
          ))}
        </div>

        <p className="teacher">지도교사 신환용 선생님</p>
      </section>

      <footer>© A.M.E.N. · 대전대신고등학교</footer>
    </main>
  );
}