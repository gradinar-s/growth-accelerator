import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import routePaths from "../../routes/routePaths";
import welcomeScreenImage from "../../static/images/welcomeScreen.svg";
import styles from "./styles.module.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();

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
          <h1 className={styles.title}>Who wants to be a millionaire?</h1>
          <Button label="Start" onClick={handleStart} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
