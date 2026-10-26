"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/app/lib/gsap";
import { footer } from "@/data/content";
import styles from "./Footer.module.css";

const word = "TAXCI".split("");
const copyrightYear = 2026;

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-letter]", {
          yPercent: 110,
          duration: 1,
          ease: "power4.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: "[data-word]",
            start: "top 92%",
            once: true,
          },
        });

        gsap.from("[data-col]", {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        });

        gsap.to("[data-glow]", {
          xPercent: 12,
          duration: 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: root }
  );

  return (
    <footer ref={root} className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div data-col>
          <h3 className={styles.label}>Explore</h3>
          <ul className={styles.links}>
            {footer.explore.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-col>
          <h3 className={styles.label}>Connect</h3>
          <ul className={styles.links}>
            {footer.connect.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-col>
          <h3 className={styles.label}>Contact</h3>
          <ul className={styles.links}>
            <li>
              <a href={`mailto:${footer.contact.email}`}>Reach out</a>
            </li>
          </ul>
          <address className={styles.address}>
            {footer.contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>
      </div>

      <div className={styles.bottomZone}>
        <div className={styles.glow} data-glow aria-hidden="true" />

        <div className={`container ${styles.wordWrap}`}>
          <div className={styles.word} data-word aria-label="Taxci">
            {word.map((character, index) => (
              <span key={`${character}-${index}`} className={styles.mask} aria-hidden="true">
                <span className={styles.letter} data-letter>
                  {character}
                </span>
              </span>
            ))}
          </div>

          <div className={styles.legal}>
            <div className={styles.legalLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
            </div>
            <p>© {copyrightYear} Taxci</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
