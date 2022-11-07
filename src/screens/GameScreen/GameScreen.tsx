import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { config, rightAnswers } from "../../config";
import { GameContext } from "../../context/context";
import { formatCurrency, getPrizesList } from "../../helpers/utils";
import routePaths from "../../routes/routePaths";
import PricesList from "../../components/application-components/PricesList/PricesList";
import QuestionAnswer from "../../components/application-components/QuestionAnswer/QuestionAnswer";
import Cross from "../../components/ui-components/Icons/Cross/Cross";
import Burder from "../../components/ui-components/Icons/Burger/Burger";
import { currentItemType } from "./types";
import styles from "./styles.module.css";

const initialItem = config.items[0];
const initialScore = formatCurrency(0);
const initialPrize = config.startPrize;
const itemsCount = config.items.length;

const prizesList = getPrizesList(itemsCount, initialPrize);

const GameScreen: React.FC = () => {
  const navigate = useNavigate();
  const { setScore } = useContext(GameContext);

  const [currentItem, setCurrentItem] = useState<currentItemType | null>(null);
  const [prizes, setPrizes] = useState<Array<string>>([]);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isShowResult, setShowResult] = useState<boolean>(false);

  // Mobile settings
  const isMobile = width < 768;
  const resultBlockMobile = isMobile && isShowResult ? styles.resultBlockModile : "";

  const handleWindowSize = () => setWidth(window.innerWidth);

  const handleResultBlock = () => setShowResult(!isShowResult);

  useEffect(() => {
    setCurrentItem(initialItem);
    setPrizes(prizesList);
    setScore(initialScore);

    // Handle window size
    window.addEventListener("resize", handleWindowSize);

    return () => {
      setCurrentItem(null);
      setPrizes([]);

      // Remove listener
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  // In a real application, the function makes a request for the correct answer
  const checkAnswer = (id: number) => rightAnswers[currentItem?.id] === id;

  const handleAnswer = (id: number) => {
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
      {isMobile && (
        <div className={styles.navigate} onClick={handleResultBlock}>
          {isShowResult ? <Cross /> : <Burder />}
        </div>
      )}
      <div className={styles.gameBlock}>
        <QuestionAnswer
          question={currentItem?.question}
          answers={currentItem?.answerOptions}
          handleAnswer={handleAnswer}
        />
      </div>
      <div className={`${styles.resultBlock} ${resultBlockMobile}`}>
        <PricesList prizes={prizes} currentQuestionId={currentItem?.id} />
      </div>
    </div>
  );
};

export default GameScreen;
