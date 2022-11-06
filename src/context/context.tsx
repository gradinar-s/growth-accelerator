import React from "react";
import { GameContextTypes } from "./types";

export const GameContext = React.createContext<GameContextTypes | null>(null);
