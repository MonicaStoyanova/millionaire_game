import { useContext } from "react";
import styles from "./Answers.module.css";
import GameContext from "../../context/game";

const AnswerItem = ({ answer, index, correctAnswer }) => {
  const letters = ["A", "B", "C", "D"];

  const { checkAnswer } = useContext(GameContext);

  return (
    <button
      className={styles.answerOptions}
      onClick={() => checkAnswer(answer, correctAnswer)}
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
