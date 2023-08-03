import { useContext, useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import dataContext from "../../context/data";

import styles from "./CategoresView.module.css";

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
  //as defaults: cat.num 9 and diff. easy, if the player just clicks on start they are ready
  const [currentCategory, setcurrentCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");

  const { category, getQuestions } = value;

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

  return (
    <div className={styles.Dropdown}>
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
      {/* <Button>Difficulty</Button> */}
    </div>
  );
};

export default CategoriesView;
