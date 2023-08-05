import axios from "axios";

import { createContext, useCallback, useEffect, useState } from "react";

const dataContext = createContext();

export default dataContext;

function Provider({ children }) {
  const [category, setCategory] = useState([]);

  const getAllCategories = useCallback(async () => {
    const response = await axios.get("https://opentdb.com/api_category.php");
    setCategory(response.data.trivia_categories);
  }, []);

  const [questions, setQuestions] = useState([]);

  const getQuestions = useCallback(async (category, difficulty) => {
    const response = await axios.get(
      //*since the difficulty is with cappital letter in the view,
      //toLowerCase() needs to be used so it can fetch properly, just in case category will be to Number
      `https://opentdb.com/api.php?amount=15&category=${Number(
        category
      )}&difficulty=${difficulty.toLowerCase()}&type=multiple`
    );
    setQuestions(response.data.results);
  }, []);

  useEffect(() => {
    getAllCategories();
  }, []);

  const valueToShare = {
    category,
    questions,
    getQuestions,
  };

  return (
    <div>
      <dataContext.Provider value={valueToShare}>
        {children}
      </dataContext.Provider>
    </div>
  );
}
export { Provider };
