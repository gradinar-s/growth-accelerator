import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameContext } from "./context/context";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";
import routePaths from "./routes/routePaths";

const App: React.FC = () => {
  const [score, setScore] = useState<string | undefined>();

  return (
    <BrowserRouter basename={routePaths.baseName}>
      <GameContext.Provider value={{ score, setScore }}>
        <Routes>
          <Route path={routePaths.welcome} element={<WelcomeScreen />} />
          <Route path={routePaths.game} element={<GameScreen />} />
          {score && <Route path={routePaths.gameOver} element={<GameOverScreen />} />}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </GameContext.Provider>
    </BrowserRouter>
  );
};

export default App;
