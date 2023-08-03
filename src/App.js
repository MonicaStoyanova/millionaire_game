import React, { useContext, useState } from "react";
import background from "./images/background.jpg";
import "./app.css";
import GameContext from "./context/game";
import Homeview from "./views/Homeview";
import CategoriesView from "./views/Category/CategoriesView";

function App() {
  const value = useContext(GameContext);

  const { gameStage, startGame } = value;

  return (
    <main
      className="background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*tracking the gamestage in order to know which view to show*/}
      {gameStage === "startGame" && <Homeview startGame={startGame} />}
      {gameStage === "chooseCategory" && <CategoriesView />}
      {/* {gameStage === "playing" && <PlayView />} */}
      {/* {gameStage === "gameOver" && <EndView />} */}
    </main>
  );
}

export default App;
