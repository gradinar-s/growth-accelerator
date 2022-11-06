import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { config, rightAnswers } from "../../config";
import Cell from "../../components/Cell/Cell";
import { GameContext } from "../../context/context";
import letters from "../../helpers/letters";
import { formatCurrency, getPrizesList } from "../../helpers/utils";
import routePaths from "../../routes/routePaths";
import styles from "./styles.module.css";

const initialItem = config.items[0];
const initialPrize = config.startPrize;
const initialScore = formatCurrency(0);
const itemsCount = config.items.length;

const prizesList = getPrizesList(itemsCount, initialPrize);

const GameScreen = () => {
  const navigate = useNavigate();
  const { setScore } = useContext(GameContext);

  const [currentItem, setCurrentItem] = useState({});
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    setCurrentItem(initialItem);
    setPrizes(prizesList);
    setScore(initialScore);

    return () => {
      setCurrentItem({});
      setPrizes([]);
    };
  }, []);

  // In a real application, the function makes a request for the correct answer
  const checkAnswer = (id) => rightAnswers[currentItem.id] === id;

  const handleAnswer = (id) => {
    const isAnswerTrue = checkAnswer(id);
    const isLastQuestion = currentItem.id === itemsCount - 1;

    if (isAnswerTrue) {
      setScore(prizes[currentItem.id]);
      setCurrentItem(config.items[currentItem.id + 1]);
    }

    if (isAnswerTrue && isLastQuestion) {
      setScore(prizes[currentItem.id]);
      navigate(routePaths.gameOver);
    }

    if (!isAnswerTrue) {
      navigate(routePaths.gameOver);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.gameBlock}>
        <h1 className={styles.question}>{currentItem?.question}</h1>
        <div className={styles.answerOptions}>
          {currentItem?.answerOptions?.map((i) => (
            <Cell
              type="answer"
              text={i.text}
              prefix={letters[i.id].toUpperCase()}
              onClick={() => handleAnswer(i.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.resultBlock}>
        <div className={styles.cells}>
          {prizes.map((i, index) => (
            <Cell
              text={i}
              width={240}
              height={40}
              type="price"
              isCurrent={currentItem.id === index}
              isPrev={currentItem.id > index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
