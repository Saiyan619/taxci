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
            <Button href="https://taxi-nine-pi.vercel.app/" animated newTab>
              Sign up free
            </Button>
            <Button
              href="https://taxi-nine-pi.vercel.app/"
              variant="ghost"
              animated
              newTab
              className={styles.ghost}
            >
              Open app
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
