import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "sm" | "lg";
  className?: string;
  onClick?: () => void;
  animated?: boolean;
  newTab?: boolean;
};

function AnimatedLabel({ children }: { children: string }) {
  return (
    <span className={styles.label} data-btn-01="stagger">
      <span className={styles.spanWrapper}>
        {[...children].map((char, index) =>
          char === " " ? (
            <span className={styles.wordSpace} aria-hidden="true" key={`space-${index}`}>
              {" "}
            </span>
          ) : (
            <span
              className={styles.spanText}
              key={`${char}-${index}`}
              style={{ transitionDelay: `${index * 0.01}s` }}
            >
              {char}
            </span>
          )
        )}
      </span>
    </span>
  );
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  animated = false,
  newTab = false,
}: Props) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${
    animated ? styles.animated : ""
  } ${className}`;
  const label =
    animated && typeof children === "string" ? (
      <AnimatedLabel>{children}</AnimatedLabel>
    ) : (
      children
    );

  if (href) {
    if (newTab) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    return (
      <Link href={href} className={cls}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {label}
    </button>
  );
}
