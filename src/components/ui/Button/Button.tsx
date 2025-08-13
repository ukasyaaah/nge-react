import type { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
}
const Button = (props: PropTypes) => {
  const { children, type } = props;
  return <button  type={type}>{children}</button>;
};

export default Button;
