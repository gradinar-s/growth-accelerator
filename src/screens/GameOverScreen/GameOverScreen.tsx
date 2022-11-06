import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import routePaths from "../../routes/routePaths";
import { GameContext } from "../../context/context";
import Button from "../../components/ui-components/Button/Button";
import welcomeScreenImage from "../../static/images/welcomeScreen.svg";
import styles from "./styles.module.css";

const GameOverScreen: React.FC = () => {
  const navigate = useNavigate();
  const { score } = useContext(GameContext);

  const handleStart = () => navigate(routePaths.game);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          <div className={styles.image}>
            <img src={welcomeScreenImage} alt="" />
          </div>
        </div>
        <div className={styles.descriptionBlock}>
          <h2 className={styles.title}>Total score:</h2>
          <h1 className={styles.text}>{score} earned</h1>
          <Button label="Try again" onClick={handleStart} />
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
