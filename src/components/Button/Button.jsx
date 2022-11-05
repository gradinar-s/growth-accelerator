import React from "react";
import styles from "./styles.module.css";

const Button = ({ label, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {label}
    </button>
  );
};

export default Button;
