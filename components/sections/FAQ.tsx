"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/content";
import SplitReveal from "@/components/ui/SplitReveal";
import styles from "./FAQ.module.css";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, React.ReactNode> = {
  smile: (
    <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c.9 1.2 2 1.8 3.5 1.8s2.6-.6 3.5-1.8M9 9.5h.01M15 9.5h.01" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}>
      <rect x="4" y="4" width="16" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="16" height="6.5" rx="1.5" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3" />
    </svg>
  ),
};

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <svg
          className={styles.star}
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 1.5c.7 5.6 4.9 9.8 10.5 10.5-5.6.7-9.8 4.9-10.5 10.5C11.3 16.9 7.1 12.7 1.5 12 7.1 11.3 11.3 7.1 12 1.5z" />
        </svg>

        <SplitReveal className={styles.title}>Frequently asked questions</SplitReveal>
        <p className={styles.sub}>
          These are the most commonly asked questions about Taxci and billing.
          <br />
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link href="mailto:hello@taxci.com">Chat to our friendly team</Link>!
        </p>

        <div className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = open === faq.id;

            return (
              <div
                key={faq.id}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.row}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                >
                  {/* <span className={styles.icon}>{icons[faq.icon]}</span> */}
                  <span className={styles.q}>{faq.q}</span>
                  <svg
                    className={styles.chevron}
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    {...stroke}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={`faq-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
