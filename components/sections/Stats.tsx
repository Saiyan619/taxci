import { stats } from "@/data/content";
import SplitReveal from "@/components/ui/SplitReveal";
import CountUp from "@/components/ui/CountUp";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats} id="stats">
      <div className="container">
        <SplitReveal className={styles.title}>
          Powered by AI Agentic Context Engine, We Turn Complex Conversations
          into Eloquent Texts
        </SplitReveal>
        <p className={styles.tagline}>Our Statistics don&apos;t lie.</p>

        <div className={styles.grid}>
          {stats.map((stat) => (
            <article key={stat.value} className={styles.card}>
              <p className={styles.caption}>{stat.caption}</p>
              <CountUp className={styles.value} value={stat.value} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
