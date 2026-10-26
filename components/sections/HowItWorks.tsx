"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/app/lib/gsap";
import FeatureCard from "@/components/ui/FeatureCard";
import { steps } from "@/data/content";
import styles from "./HowItWorks.module.css";

const rest = [0, -3, 3];

export default function HowItWorks() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-item]");
        const tilts = gsap.utils.toArray<HTMLElement>("[data-tilt]");

        tilts.forEach((tilt, index) => {
          if (index > 0) {
            gsap.fromTo(
              tilt,
              { rotation: rest[index] * 2.5, y: 60 },
              {
                rotation: rest[index],
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: items[index],
                  start: "top bottom",
                  end: "top 30%",
                  scrub: true,
                },
              }
            );
          }

          if (index < tilts.length - 1) {
            gsap.to(tilt, {
              scale: 0.94,
              ease: "none",
              scrollTrigger: {
                trigger: items[index + 1],
                start: "top bottom",
                end: "top 30%",
                scrub: true,
              },
            });
          }
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} id="how-it-works">
      <div className="container">
        <h2 className={styles.title}>How It Works</h2>

        <div className={styles.stack}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={styles.item}
              data-item
              style={
                {
                  "--i": index,
                  zIndex: 100 + index,
                } as React.CSSProperties
              }
            >
              <div className={styles.tilt} data-tilt>
                <FeatureCard
                  title={step.title}
                  body={step.body}
                  media={step.media}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
