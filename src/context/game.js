import { createContext, useState } from "react";

const GameContext = createContext();

export default GameContext;

export const GameProvider = ({ children }) => {
  // startGame
  // chooseCategory
  // playing
  // gameOver

  const [gameStage, setGameStage] = useState("startGame");
  //where is the player on the ladder of questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startGame = () => {
    setGameStage("chooseCategory");
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  // need to check if its the last question

  const valueToShare = {
    gameStage,
    startGame,
    nextQuestion,
  };

  return (
    <div>
      <GameContext.Provider value={valueToShare}>
        {children}
      </GameContext.Provider>
    </div>
  );
};
