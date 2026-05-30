"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORDS = ["Website", "SaaS", "App", "System", "Automation"];
const HOLD = 1000;

type AnimatedWordProps = {
  /** Wait before the first word swap (ms), e.g. until hero intro finishes */
  startDelayMs?: number;
};

export function AnimatedWord({ startDelayMs = 0 }: AnimatedWordProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;
    let startTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      timer = setTimeout(() => {
        // slow fade + blur out
        gsap.to(el, {
          opacity: 0,
          filter: "blur(6px)",
          y: -10,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete() {
            idx = (idx + 1) % WORDS.length;
            el.textContent = WORDS[idx];
            gsap.set(el, { y: 12, filter: "blur(8px)" });

            // slow fade + blur in
            gsap.to(el, {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: 0.95,
              ease: "power2.out",
              onComplete: cycle,
            });
          },
        });
      }, HOLD);
    };

    startTimer = setTimeout(cycle, startDelayMs);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
      gsap.killTweensOf(el);
    };
  }, [startDelayMs]);

  return (
    <span ref={ref} className="cycling-word">
      Website
    </span>
  );
}
