import dataContext from "../../context/data";
import { useContext, useState } from "react";
import styles from "./PlayView.module.css";
import GameContext from "../../context/game";
import Question from "../../components/Question/Question";
import Answers from "../../components/Answers/Answers";
import Timer from "../../components/Timer/Timer";
import Next from "../../components/Next/Next";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Sound from "../../components/Sound";

const PlayView = () => {
  const value = useContext(dataContext);
  const gameStageValue = useContext(GameContext);

  const { currentQuestionIndex, currentAnswer } = gameStageValue;
  const { questions } = value;

  if (questions.length === 0) {
    return <ErrorMessage />;
  }
  // the Error with undefined still occurs
  const { question, incorrect_answers, correct_answer } =
    questions[currentQuestionIndex];

  const shuffledAnswers = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <>
      <div className={styles.playView}>
        <Timer />
        <Sound />
        {currentAnswer === correct_answer && <Next />}
        <Question
          question={question}
          currentQuestionIndex={currentQuestionIndex}
        />
        <Answers
          shuffledAnswers={shuffledAnswers}
          correctAnswer={correct_answer}
        />
      </div>
    </>
  );
};

export default PlayView;
