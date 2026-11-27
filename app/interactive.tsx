"use client";

import { useEffect, useState, type ReactNode } from "react";

/* ── 이름 뜻 버튼: 누르면 아래에 설명이 나와요 ── */
type Meaning = { en: string; ko: string; detail: string };

export function MeaningPills({ items }: { items: Meaning[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : items[active];

  return (
    <div className="meaning">
      <div className="meaning-row">
        {items.map((m, i) => (
          <button
            key={m.en}
            type="button"
            className={active === i ? "pill pill-active" : "pill"}
            aria-pressed={active === i}
            onClick={() => setActive(active === i ? null : i)}
          >
            <b>{m.en[0]}</b>
            {m.en}
            <small>{m.ko}</small>
          </button>
        ))}
      </div>
      <p className={current ? "meaning-detail show" : "meaning-detail"} aria-live="polite">
        {current ? (
          <>
            <strong>{current.en}</strong> {current.detail}
          </>
        ) : (
          "글자를 눌러 A.M.E.N.의 뜻을 알아보세요."
        )}
      </p>
    </div>
  );
}

/* ── 분과 탭: 버튼을 누르면 아래 내용이 바뀌어요 ── */
type Team = { icon: ReactNode; title: string; full: string; desc: string };

export function TeamTabs({ teams }: { teams: Team[] }) {
  const [active, setActive] = useState(0);
  const t = teams[active];

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist">
        {teams.map((team, i) => (
          <button
            key={team.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={active === i ? "tab tab-active" : "tab"}
            onClick={() => setActive(i)}
          >
            {team.title.replace(" 분과", "")}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel" key={t.title}>
        <div className="card-icon">{t.icon}</div>
        <div>
          <h3>{t.title}</h3>
          <p className="tab-full">{t.full}</p>
          <p className="tab-desc">{t.desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ── 맨 위로 버튼: 아래로 내리면 오른쪽 아래에 생겨요 ── */
export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={show ? "to-top show" : "to-top"}
      aria-label="맨 위로"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
