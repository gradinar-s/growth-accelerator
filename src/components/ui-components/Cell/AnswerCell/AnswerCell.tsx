import React from "react";
import BackgroundCell from "../BackgroundCell";
import { CellProps } from "../types";
import styles from "./styles.module.css";

const AnswerCell: React.FC<Partial<CellProps>> = ({ prefix, text, onClick }) => (
  <div className={styles.wrapper} onClick={onClick}>
    <div className={styles.cell}>
      <BackgroundCell />
      <div className={styles.content}>
        <span className={styles.prefix}>{prefix}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  </div>
);

export default AnswerCell;
