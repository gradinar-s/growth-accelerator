import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";
import { GameContext } from "./context/context";
import "./App.css";

function App() {
  const [score, setScore] = useState();

  return (
    <GameContext.Provider value={{ score, setScore }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/game" element={<GameScreen />} />
          {score && <Route path="/game-over" element={<GameOverScreen />} />}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </GameContext.Provider>
  );
}

export default App;
