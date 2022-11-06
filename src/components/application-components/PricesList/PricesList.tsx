import React from "react";
import PriceCell from "../../ui-components/Cell/PriceCell/PriceCell";
import { PricesListPropsT } from "./types";
import styles from "./styles.module.css";

const PricesList: React.FC<PricesListPropsT> = ({ prizes, currentQuestionId }) => (
  <div className={styles.cells}>
    {prizes.map((i, index) => (
      <PriceCell
        key={i}
        text={i}
        isPrevious={currentQuestionId > index}
        isCurrent={currentQuestionId === index}
      />
    ))}
  </div>
);

export default PricesList;
