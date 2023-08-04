import { useContext, useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import dataContext from "../../context/data";
import Button from "../../components/Button/Button";

import styles from "./CategoresView.module.css";
import GameContext from "../../context/game";

const options = [
  {
    id: 1,
    name: "Easy",
  },
  {
    id: 2,
    name: "Medium",
  },
  {
    id: 3,
    name: "Hard",
  },
];

const CategoriesView = () => {
  const value = useContext(dataContext);
  const gameContextValue = useContext(GameContext);
  //as defaults: cat.num 9 and diff. easy, if the player just clicks on start they are ready
  const [currentCategory, setcurrentCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");

  const { category, getQuestions } = value;
  const { currentGameStage } = gameContextValue;

  const onSelectedCategoryHandler = (e) => {
    setcurrentCategory(e.target.value);
  };

  const onSelectedDifficultyHandler = (e) => {
    setDifficulty(e.target.value);
  };

  useEffect(() => {
    if (currentCategory !== "" && difficulty !== "") {
      getQuestions(currentCategory, difficulty);
    }
  }, [currentCategory, difficulty]);

  const startGameStageHandler = () => {
    currentGameStage("playing");
  };

  return (
    <div className={styles.dropdown}>
      <Dropdown
        options={category}
        heading="Category"
        category={true}
        onChange={onSelectedCategoryHandler}
      />
      <Dropdown
        options={options}
        heading="Difficulty"
        onChange={onSelectedDifficultyHandler}
      />
      <div className={styles.startGameButton}>
        <Button clickHandler={startGameStageHandler}>Start Game</Button>
      </div>
    </div>
  );
};

export default CategoriesView;
