import dataContext from "../../context/data";
import { useContext, useState } from "react";
import styles from "./PlayView.module.css";
import GameContext from "../../context/game";
import CategoriesView from "../Category/CategoriesView";
import Button from "../../components/Button/Button";
import Question from "../../components/Question/Question";
import Answers from "../../components/Answers/Answers";
import Timer from "../../components/Timer/Timer";

const PlayView = () => {
  const value = useContext(dataContext);
  const gameStageValue = useContext(GameContext);

  const { currentQuestionIndex } = gameStageValue;
  const { questions } = value;

  const { question, incorrect_answers, correct_answer } =
    questions[currentQuestionIndex];

  const shuffledAnswers = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  //demek onclick trqvbva da proverqwa ? ako e prawilen otg da se poqvi next:ako ne -  da se poqwi end

  return (
    <>
      <div className={styles.PlayView}>
        <Timer />
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
