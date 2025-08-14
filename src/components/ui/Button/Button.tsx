import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface PropTypes {
  children: ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
}
const Button = (props: PropTypes) => {
  const { children, type, onClick } = props;
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
