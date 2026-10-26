import Image from "next/image";
import styles from "./FeatureCard.module.css";

type Props = {
  title: string;
  body: string;
  media: string;
};

export default function FeatureCard({ title, body, media }: Props) {
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

      <div className={styles.icon} aria-hidden="true" />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
}