import Link from "next/link";
import Button from "@/components/ui/Button";
import SplitReveal from "@/components/ui/SplitReveal";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section} id="get-started">
      <div className="container">
        <div className={styles.card}>
          <SplitReveal className={styles.title}>
            Ready to write
            <span className={styles.accent}>eloquent rewrites?</span>
          </SplitReveal>
          <p className={styles.sub}>
            Dump your raw thoughts, pick a tone, and send something you&apos;re
            proud of. Free for 7 days, no card needed.
          </p>

          <div className={styles.actions}>
            <Button href="/signup">Sign up free</Button>
            <Link href="/app" className={styles.ghost}>
              Open app
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
