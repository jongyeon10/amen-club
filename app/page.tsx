export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="#">A.M.E.N.</a>
        <nav>
          <a href="#about">소개</a>
          <a href="#activities">활동</a>
        </nav>
      </header>

      <section className="hero">
        <p className="label">우리 동아리를 소개합니다</p>
        <h1>
          대전대신고등학교,<br />
          <span>최고의 수학/공학 동아리</span>
        </h1>
        <p className="description">동아리 한 줄 소개</p>
        <a className="button" href="#about">더 알아보기 ↓</a>
      </section>

      <section className="section" id="about">
        <p className="label">ABOUT US</p>
        <h2>우리는 이런 동아리예요.</h2>
        <p>-대신 사이언스 챌린지 개최</p>
      </section>

      <section className="section" id="activities">
        <p className="label">ACTIVITIES</p>
        <h2>이런 활동을 해요.</h2>
        <div className="cards">
          <article>
            <h3>활동 이름 1</h3>
            <p>활동 설명</p>
          </article>
          <article>
            <h3>활동 이름 2</h3>
            <p>활동 설명</p>
          </article>
          <article>
            <h3>활동 이름 3</h3>
            <p>활동 설명</p>
          </article>
        </div>
      </section>

      <footer>© A.M.E.N.</footer>
    </main>
  );
}