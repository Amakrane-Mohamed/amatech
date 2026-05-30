"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  HERO_REVEAL_START,
  HERO_STAGGER,
  INTRO_ENTER_DURATION,
  INTRO_EXIT_DURATION,
  INTRO_EXIT_START,
  INTRO_HOLD_DURATION,
} from "@/lib/hero-intro-timing";
import { AnimatedWord } from "./animated-word";

const HERO_VIDEO_SRC = "/videos/eeeee.mp4";

export function HeroVideoSection() {
  const videoRef        = useRef<HTMLVideoElement>(null);
  const introRef        = useRef<HTMLDivElement>(null);
  const introTextRef    = useRef<HTMLDivElement>(null);
  const progressWrapRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressPctRef  = useRef<HTMLSpanElement>(null);
  const contentRef      = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  /* ── video autoplay ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReducedMotion) { video.pause(); return; }
    void video.play().catch(() => {});
  }, [prefersReducedMotion]);

  /* ── intro → hero reveal ── */
  useEffect(() => {
    const intro        = introRef.current;
    const text         = introTextRef.current;
    const progressWrap = progressWrapRef.current;
    const progressFill = progressFillRef.current;
    const progressPct  = progressPctRef.current;
    const content      = contentRef.current;
    if (!intro || !text || !progressWrap || !progressFill || !progressPct || !content) return;

    const header = document.querySelector<HTMLElement>(".site-header");
    const heroItems = [
      content.querySelector<HTMLElement>(".hero-badge"),
      content.querySelector<HTMLElement>(".hero-heading"),
      content.querySelector<HTMLElement>(".hero-desc"),
      content.querySelector<HTMLElement>(".hero-ctas-wrap"),
    ].filter((el): el is HTMLElement => el !== null);

    if (prefersReducedMotion) {
      gsap.set(intro, { display: "none" });
      gsap.set(heroItems, { opacity: 1, y: 0, filter: "blur(0px)" });
      if (header) {
        gsap.set(header, {
          opacity: 1,
          y: 0,
          visibility: "visible",
          pointerEvents: "auto",
        });
        header.removeAttribute("aria-hidden");
      }
      return;
    }

    gsap.set(text, {
      opacity: 0,
      letterSpacing: "0.55em",
      filter: "blur(6px)",
    });
    gsap.set(progressWrap, { opacity: 0 });
    gsap.set(progressFill, { scaleX: 0, transformOrigin: "left center" });
    progressPct.textContent = "0%";
    gsap.set(heroItems, {
      opacity: 0,
      y: 28,
      filter: "blur(4px)",
    });
    if (header) {
      gsap.set(header, {
        opacity: 0,
        y: -16,
        visibility: "hidden",
        pointerEvents: "none",
      });
      header.setAttribute("aria-hidden", "true");
    }

    const counter = { value: 0 };
    const tl = gsap.timeline();

    // 0s — "Amatech" fades in, letters contract wide → tight
    tl.to(
      text,
      {
        opacity: 1,
        letterSpacing: "-0.04em",
        filter: "blur(0px)",
        duration: INTRO_ENTER_DURATION,
        ease: "power3.out",
      },
      0
    )

      // ~1s — settled, hold + progress bar fills 0→100%
      .to({}, { duration: INTRO_HOLD_DURATION }, INTRO_ENTER_DURATION)
      .to(progressWrap, { opacity: 1, duration: 0.35, ease: "power2.out" }, INTRO_ENTER_DURATION)
      .to(progressFill, { scaleX: 1, duration: INTRO_HOLD_DURATION, ease: "none" }, INTRO_ENTER_DURATION)
      .to(counter, {
        value: 100,
        duration: INTRO_HOLD_DURATION,
        ease: "none",
        onUpdate() {
          progressPct.textContent = Math.round(counter.value) + "%";
        },
      }, INTRO_ENTER_DURATION)

      // ~2.4s — expand + blur out
      .to(
        text,
        {
          opacity: 0,
          letterSpacing: "0.18em",
          filter: "blur(14px)",
          duration: INTRO_EXIT_DURATION,
          ease: "power2.inOut",
        },
        INTRO_EXIT_START
      )
      .to(
        intro,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power1.inOut",
          onComplete() {
            gsap.set(intro, { display: "none" });
          },
        },
        INTRO_EXIT_START + 0.15
      )

      // ~3s — hero content staggers in (header reveals at same time)
      .to(
        heroItems,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          stagger: HERO_STAGGER,
        },
        HERO_REVEAL_START
      );

    if (header) {
      tl.to(
        header,
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          pointerEvents: "auto",
          duration: 0.8,
          ease: "power2.out",
          onStart() {
            header.removeAttribute("aria-hidden");
          },
        },
        HERO_REVEAL_START
      );
    }

    return () => {
      tl.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="hero-video-hdr pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay muted loop playsInline preload="auto" aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"
        aria-hidden
      />

      {/* ── Intro overlay ── */}
      <div ref={introRef} className="hero-intro">
        <div className="hero-intro-inner">
          <div ref={introTextRef} className="hero-intro-text">
            Amatech
          </div>
          <div ref={progressWrapRef} className="intro-progress-wrap" aria-hidden>
            <div className="intro-progress-track">
              <div ref={progressFillRef} className="intro-progress-fill" />
            </div>
            <span ref={progressPctRef} className="intro-progress-pct">0%</span>
          </div>
        </div>
      </div>

      {/* ── Hero content (hidden until intro finishes) ── */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Badge */}
        <div className="hero-badge badge-wrap">
          <div className="badge-outline"  aria-hidden />
          <div className="badge-inner-wrap">
            <div className="badge-inner-bg" aria-hidden />
            <div className="badge-sheen"   aria-hidden />
            <span className="badge-dot"    aria-hidden />
            <span className="tagline-01 badge-text">
              Introducing the future of tech solutions
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-heading text-center">
          Turn your big idea into
          <br />a stunning{" "}
          <AnimatedWord startDelayMs={HERO_REVEAL_START * 1000 + 400} />
        </h1>

        {/* Description */}
        <p className="hero-desc paragraph-02 hero-subtitle">
          We build high-performance digital products that drive growth.
          From concept to launch, crafted with precision and purpose.
        </p>

        {/* CTAs */}
        <div className="hero-ctas hero-ctas-wrap">
          <a href="#" className="button-03 button-03--yellow">
            <span className="btn-arrow" aria-hidden>
              <svg className="btn-arrow__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12h15M13.5 7.5l5.5 4.5-5.5 4.5" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="primary-button-text">Get Started Now</span>
          </a>
          <a href="#" className="button-03 button-03--white">
            <span className="primary-button-text">See Offers</span>
          </a>
        </div>
      </div>
    </section>
  );
}
