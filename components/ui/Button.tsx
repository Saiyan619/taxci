import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "dark";
  size?: "sm" | "lg";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}: Props) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
