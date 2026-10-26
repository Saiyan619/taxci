import Button from "@/components/ui/Button";
import SplitReveal from "@/components/ui/SplitReveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <SplitReveal as="h1" className={styles.title} start="top 100%">
          <span>No More</span>
          <span>Struggling for the</span>
          <span className={styles.script}>right words.</span>
        </SplitReveal>

        <p className={styles.sub}>
          Taxci uses AI to translate your raw writings, thoughts and voice into
          powerful and elegant writings, exactly the way you meant to say them.
        </p>

        <div className={styles.actions}>
          <Button href="#features" variant="dark">
            Features
          </Button>
          <Button href="#get-started">Get Started</Button>
        </div>

        <div className={styles.mockup}>
          <span>App preview</span>
        </div>
      </div>
    </section>
  );
}
