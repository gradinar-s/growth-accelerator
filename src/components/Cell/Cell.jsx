import React from "react";
import BackgroundCell from "./BackgroundCell";
import styles from "./styles.module.css";

const TYPE_PRICE = "price";
// const TYPE_ANSWER = "answer";

const Cell = ({ prefix, text, width, height, type, isCurrent, isPrev, ...rest }) => {
  const contentClassName = type === TYPE_PRICE ? styles.contentPrice : "";
  const wrapperClassName = type === TYPE_PRICE ? styles.wrapperPrice : "";
  const cellClassName = type === TYPE_PRICE ? styles.cellPrice : styles.cellAnswer;
  const currentCell = isCurrent ? styles.currentCell : "";
  const prevCell = isPrev ? styles.prevCell : "";

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`} onClick={rest.onClick}>
      <div className={`${styles.cell} ${cellClassName} ${currentCell} ${prevCell}`}>
        <BackgroundCell className={styles.backgroundCell} width={width} height={height} />
        <div className={`${styles.content} ${contentClassName}`}>
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <span className={styles.text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Cell;
