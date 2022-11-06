import React from "react";
import letters from "../../../helpers/letters";
import AnswerCell from "../../ui-components/Cell/AnswerCell/AnswerCell";
import { QuestionAnswerPropsT } from "./types";
import styles from "./styles.module.css";

const QuestionAnswer: React.FC<QuestionAnswerPropsT> = ({ question, answers, handleAnswer }) => (
  <>
    <h1 className={styles.question}>{question}</h1>
    <div className={styles.answerOptions}>
      {answers?.map((i) => (
        <AnswerCell
          key={i.id}
          text={i.text}
          prefix={letters[i.id].toUpperCase()}
          onClick={() => handleAnswer(i.id)}
        />
      ))}
    </div>
  </>
);

export default QuestionAnswer;
