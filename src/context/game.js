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
  const [currentAnswer, setCurrentAnswer] = useState("");

  const currentGameStage = (stage) => {
    if (stage === "startGame") {
      setCurrentQuestionIndex(0);
    }
    setGameStage(stage);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkAnswer = (answer, correctAsnwer) => {
    if (answer === correctAsnwer) {
      nextQuestion();
    } else {
      currentGameStage("gameOver");
    }
  };
  // need to check if its the last question

  const valueToShare = {
    gameStage,
    currentGameStage,
    nextQuestion,
    currentQuestionIndex,
    checkAnswer,
    setCurrentAnswer,
    currentAnswer,
  };

  return (
    <div>
      <GameContext.Provider value={valueToShare}>
        {children}
      </GameContext.Provider>
    </div>
  );
};
