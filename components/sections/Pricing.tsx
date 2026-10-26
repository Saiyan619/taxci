"use client";

import { useState } from "react";
import Link from "next/link";
import { plans } from "@/data/content";
import SplitReveal from "@/components/ui/SplitReveal";
import styles from "./Pricing.module.css";

type Billing = "monthly" | "yearly";

function Check() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.18" />
      <path
        d="M4.6 8.2l2.3 2.3 4.5-4.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanIcon({ featured }: { featured: boolean }) {
  return (
    <span className={styles.icon} aria-hidden="true">
      {featured ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <SplitReveal className={styles.title}>Transparent pricing for all.</SplitReveal>
        <p className={styles.sub}>
          Choose the plan that fits how you write. Change or cancel any time.
        </p>

        <div className={styles.toggle} role="group" aria-label="Billing period">
          {(["monthly", "yearly"] as const).map((period) => (
            <button
              key={period}
              type="button"
              aria-pressed={billing === period}
              className={`${styles.toggleBtn} ${
                billing === period ? styles.active : ""
              }`}
              onClick={() => setBilling(period)}
            >
              {period === "monthly" ? "Monthly" : "Yearly"}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.card} ${
                plan.featured ? styles.featured : ""
              }`}
            >
              <PlanIcon featured={plan.featured} />
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.blurb}>{plan.blurb}</p>

              <p className={styles.price}>
                <span className={styles.amount}>${plan[billing]}</span>
                {plan.monthly > 0 && <span className={styles.per}>/mo</span>}
              </p>
              <p className={styles.billed}>
                {plan.monthly === 0
                  ? "Free forever"
                  : billing === "monthly"
                    ? "Billed monthly"
                    : "Billed yearly"}
              </p>

              <ul className={styles.list}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="#get-started" className={styles.cta}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
