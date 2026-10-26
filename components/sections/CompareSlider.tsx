"use client";

import { useRef, useState } from "react";
import { compare } from "@/data/content";
import SplitReveal from "@/components/ui/SplitReveal";
import styles from "./CompareSlider.module.css";

const clamp = (value: number) => Math.min(98, Math.max(2, value));

export default function CompareSlider() {
  const boxRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const moveTo = (clientX: number) => {
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const step = event.shiftKey ? 10 : 4;

    if (event.key === "ArrowLeft") setPos((current) => clamp(current - step));
    else if (event.key === "ArrowRight") {
      setPos((current) => clamp(current + step));
    } else if (event.key === "Home") setPos(2);
    else if (event.key === "End") setPos(98);
    else return;

    event.preventDefault();
  };

  return (
    <section className={styles.section} id="compare">
      <div className="container">
        <SplitReveal className={styles.title}>
          <span>Trapped in your own head?</span>
          <span>Taxci fixes that!!</span>
        </SplitReveal>

        <div
          ref={boxRef}
          className={styles.box}
          style={{ "--pos": `${pos}%` } as React.CSSProperties}
          onPointerDown={(event) => {
            dragging.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            moveTo(event.clientX);
          }}
          onPointerMove={(event) => {
            if (dragging.current) moveTo(event.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
        >
          <div className={`${styles.layer} ${styles.polished}`}>
            <span className={styles.label}>Taxci polished</span>
            <p>{compare.polished}</p>
          </div>

          <div className={`${styles.layer} ${styles.raw}`}>
            <span className={styles.label}>Your raw thought</span>
            <p>{compare.raw}</p>
          </div>

          <div
            className={styles.handle}
            role="slider"
            tabIndex={0}
            aria-label="Compare raw thoughts with polished writing"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% raw thought, ${100 - Math.round(pos)}% Taxci polished`}
            onKeyDown={onKeyDown}
          >
            <span className={styles.pill}>
              <span className={styles.arrow} aria-hidden="true">
                ↔
              </span>
            </span>
          </div>
        </div>

        <div className={styles.legend} aria-hidden="true">
          <span className={styles.legendItem}>
            <span className={`${styles.swatch} ${styles.rawSwatch}`} />
            Your raw thought
          </span>
          <span className={styles.legendInstruction}>Drag to reveal</span>
          <span className={styles.legendItem}>
            Taxci polished
            <span className={`${styles.swatch} ${styles.polishedSwatch}`} />
          </span>
        </div>

        <p className={styles.note}>*Illustrative demo.</p>
      </div>
    </section>
  );
}
