import FeatureCard from "@/components/ui/FeatureCard";
import SplitReveal from "@/components/ui/SplitReveal";
import { features } from "@/data/content";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <SplitReveal className={styles.title}>Main Features</SplitReveal>

        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              body={feature.body}
              media={feature.media}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
