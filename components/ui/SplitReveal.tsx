"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/app/lib/gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
  start?: string;
};

export default function SplitReveal({
  children,
  className,
  as = "h2",
  start = "top 88%",
}: Props) {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Wait for fonts so SplitText calculates line breaks correctly
      // (critical on mobile where custom fonts may load later)
      let splitInstance: SplitText | null = null;

      const init = () => {
        splitInstance = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 110,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.09,
              scrollTrigger: { trigger: el, start, once: true },
            });
          },
        });
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(init);
      } else {
        init();
      }

      return () => {
        splitInstance?.revert();
      };
    },
    { scope: root }
  );

  const Tag = as;

  return (
    <Tag ref={root} className={className}>
      {children}
    </Tag>
  );
}

