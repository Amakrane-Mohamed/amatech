const WORDS = [
  "App Development",
  "SaaS",
  "AI Automation",
  "Web Design",
  "Mobile Apps",
  "E-Commerce",
  "UI / UX",
  "Digital Products",
  "Branding",
  "Launch",
];

export function MarqueeStrip() {
  return (
    <>
      <style>{`
        @keyframes mq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mq-track { animation: none !important; }
        }
      `}</style>

      <div aria-hidden className="w-full overflow-hidden bg-[#cffe25] py-5">
        <div
          className="mq-track flex w-max"
          style={{
            animation: "mq-scroll 30s linear infinite",
          }}
        >
          {[0, 1].map((set) => (
            <ul
              key={set}
              className="m-0 flex flex-none list-none items-center p-0"
            >
              {WORDS.map((word, i) => (
                <li
                  key={`${set}-${i}`}
                  className="inline-flex items-center"
                >
                  <span
                    className="inline-block px-9 text-[15px] leading-none font-bold tracking-[0.22em] whitespace-nowrap uppercase"
                    style={{
                      fontFamily:
                        'var(--font-inter), Inter, Arial, sans-serif',
                      color: "#010104",
                    }}
                  >
                    {word}
                  </span>
                  <span
                    className="shrink-0 text-[7px] leading-none"
                    style={{ color: "rgba(1,1,4,0.3)" }}
                  >
                    ◆
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
