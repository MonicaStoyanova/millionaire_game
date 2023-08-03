import React, { useContext, useState } from "react";
import background from "./images/background.jpg";
import "./app.css";
import GameContext from "./context/game";
import Homeview from "./views/Homeview";
import CategoriesView from "./views/Category/CategoriesView";
import PlayView from "./views/Play/PlayView";
import EndView from "./views/End/EndView";

function App() {
  const value = useContext(GameContext);

  const { gameStage, currentGameStage } = value;

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
      {gameStage === "startGame" && <Homeview startGame={currentGameStage} />}
      {gameStage === "chooseCategory" && (
        <CategoriesView gameStage={gameStage} />
      )}
      {gameStage === "playing" && <PlayView />}
      {gameStage === "gameOver" && <EndView />}
    </main>
  );
}

export default App;
