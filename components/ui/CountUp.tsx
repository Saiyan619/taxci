"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/app/lib/gsap";

type Props = {
  value: string;
  className?: string;
};

/* Keeps whatever sits either side of the number ("M+", "%") and counts the
   numeric part up on scroll. Sub-10 targets get decimals so values like
   "1M+" still move instead of snapping from 0. */
const pattern = /^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/;

export default function CountUp({ value, className }: Props) {
  const root = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      const parts = value.match(pattern);
      if (!el || !parts) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const [, prefix, raw, suffix] = parts;
      const target = Number(raw.replace(/,/g, ""));
      if (!Number.isFinite(target)) return;

      const decimals = target >= 10 ? 0 : 2;
      const format = (n: number) => {
  let str = n.toFixed(decimals);
  // strip leading zero from integer part while preserving decimals:
  // "0.00" → ".00", "0.50" → ".50", "1.00" → "1.00", "74" → "74"
  if (str.startsWith('0') && str.includes('.')) {
    str = '.' + str.slice(2);
  } else {
    str = str.replace(/^0+/, '');
  }
  return `${prefix}${str}${suffix}`;
};

      const counter = { n: 0 };
      el.textContent = format(0);

      gsap.to(counter, {
        n: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        onUpdate: () => {
          el.textContent = format(counter.n);
        },
        onComplete: () => {
          el.textContent = value;
        },
      });
    },
    { scope: root }
  );

  return (
    <span ref={root} className={className}>
      {value}
    </span>
  );
}
