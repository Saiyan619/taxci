"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/app/lib/gsap";
import { testimonials } from "@/data/content";
import styles from "./Testimonials.module.css";

const total = testimonials.length;

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const split = useRef<SplitText | null>(null);
  const busy = useRef(false);
  const interacted = useRef(false);
  const [index, setIndex] = useState(0);

  const testimonial = testimonials[index];

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduce) {
        busy.current = false;
        return;
      }

      const scrollTrigger = interacted.current
        ? undefined
        : { trigger: root.current, start: "top 70%", once: true };

      const init = () => {
        split.current = SplitText.create(quoteRef.current!, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 110,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.08,
              scrollTrigger,
              onComplete: () => {
                busy.current = false;
              },
            });
          },
        });

        gsap.fromTo(
          authorRef.current,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            delay: 0.25,
            ease: "power3.out",
            scrollTrigger,
          }
        );
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(init);
      } else {
        init();
      }

      return () => {
        split.current?.revert();
        split.current = null;
      };
    },
    { scope: root, dependencies: [index] }
  );

  const go = (direction: 1 | -1) => {
    if (busy.current) return;

    busy.current = true;
    interacted.current = true;

    const next = (index + direction + total) % total;
    const lines = split.current?.lines;

    if (!lines?.length) {
      setIndex(next);
      busy.current = false;
      return;
    }

    gsap
      .timeline({ onComplete: () => setIndex(next) })
      .to(lines, {
        yPercent: -110,
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.05,
      })
      .to(authorRef.current, { autoAlpha: 0, duration: 0.3 }, 0);
  };

  return (
    <section ref={root} className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <h2 className={styles.title}>What people say</h2>

            <div className={styles.nav}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M15 5l-7 7 7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => go(1)}
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className={styles.count}>
                {index + 1} / {total}
              </span>
            </div>
          </div>

          <div className={styles.right} aria-live="polite">
            <p ref={quoteRef} className={styles.quote}>
              {testimonial.quote}
            </p>

            <div ref={authorRef} className={styles.author}>
              <div className={styles.avatar} aria-hidden="true">
                {initials(testimonial.name)}
              </div>
              <div>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
