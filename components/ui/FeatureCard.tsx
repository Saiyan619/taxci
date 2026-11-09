import Image from "next/image";
import styles from "./FeatureCard.module.css";

type IconName = "voice" | "tone" | "thoughts" | "scribe" | "send";

type Props = {
  title: string;
  body: string;
  media: string;
  icon?: IconName;
};

function CardIcon({ name }: { name: IconName }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "voice") {
    return (
      <svg viewBox="0 0 24 24" width="19" height="19" {...stroke}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3" />
      </svg>
    );
  }

  if (name === "tone") {
    return (
      <svg viewBox="0 0 24 24" width="19" height="19" {...stroke}>
        <path d="M5 7h14M5 12h14M5 17h14" />
        <circle cx="9" cy="7" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="11" cy="17" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "thoughts") {
    return (
      <svg viewBox="0 0 24 24" width="19" height="19" {...stroke}>
        <path d="M6 4.5h8l4 4V19a1 1 0 01-1 1H6a1 1 0 01-1-1V5.5a1 1 0 011-1z" />
        <path d="M14 4.5V9h4M8 13h8M8 16h5" />
      </svg>
    );
  }

  if (name === "scribe") {
    return (
      <svg viewBox="0 0 24 24" width="19" height="19" {...stroke}>
        <path d="M6 4.5h8l4 4V19a1 1 0 01-1 1H6a1 1 0 01-1-1V5.5a1 1 0 011-1z" />
        <path d="M14 4.5V9h4M8 13h8M8 16h5" />
        <path d="M17.5 14.5l.6.9 1.1.2-.8.8.1 1.1-1-.5-1 .5.1-1.1-.8-.8 1.1-.2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="19" height="19" {...stroke}>
      <path d="M4 12l16-8-5.5 16-3.1-6.1L4 12z" />
      <path d="M11.4 13.9L20 4" />
    </svg>
  );
}

export default function FeatureCard({ title, body, media, icon }: Props) {
  const isImage =
    Boolean(media) &&
    (media.startsWith("/") ||
      media.startsWith("http://") ||
      media.startsWith("https://") ||
      /\.(jpg|jpeg|png|webp|avif|svg)$/i.test(media));

  const isVideo = Boolean(media) && /\.(mp4|webm|ogg)$/i.test(media);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {isImage ? (
          <Image
            src={media}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.image}
          />
        ) : isVideo ? (
          <video src={media} autoPlay loop muted playsInline />
        ) : (
          <span>{media}</span>
        )}
      </div>

      <div className={styles.icon} aria-hidden="true">
        {icon && <CardIcon name={icon} />}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
}