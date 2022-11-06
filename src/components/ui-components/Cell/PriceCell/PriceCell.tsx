import React from "react";
import BackgroundCell from "../BackgroundCell";
import { CellProps } from "../types";
import styles from "./styles.module.css";

const WIDTH = 240;
const HEIGHT = 40;

const PriceCell: React.FC<Partial<CellProps>> = ({ text, isCurrent, isPrevious, onClick }) => {
  const currentCell = isCurrent ? styles.currentCell : "";
  const previousCell = isPrevious ? styles.previousCell : "";

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={`${styles.cell} ${currentCell} ${previousCell}`}>
        <BackgroundCell className={styles.backgroundCell} width={WIDTH} height={HEIGHT} />
        <div className={styles.content}>
          <span className={styles.text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCell;
