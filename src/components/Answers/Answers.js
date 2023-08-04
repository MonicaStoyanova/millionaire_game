import { useContext } from "react";
import styles from "./Answers.module.css";
import GameContext from "../../context/game";

const AnswerItem = ({ answer, index, correctAnswer }) => {
  const letters = ["A", "B", "C", "D"];

  const { setCurrentAnswer, currentGameStage } = useContext(GameContext);

  const isCorrectAnswer = (answer) => {
    if (!(correctAnswer === answer)) {
      currentGameStage("gameOver");
    }
    setCurrentAnswer(answer);
  };

  return (
    <button
      className={styles.answerOptions}
      onClick={() => isCorrectAnswer(answer)}
    >
      <span>{letters[index]}: </span>
      {answer}
    </button>
  );
};

const Answers = ({ shuffledAnswers, correctAnswer }) => {
  return (
    <div className={styles.answersContainer}>
      {shuffledAnswers.map((a, i) => (
        <AnswerItem
          key={a}
          answer={a}
          index={i}
          correctAnswer={correctAnswer}
        />
      ))}
    </div>
  );
};

export default Answers;
