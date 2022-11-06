import React from "react";
import { ButtonProps } from "./types";
import styles from "./styles.module.css";

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {label}
    </button>
  );
};

export default Button;
