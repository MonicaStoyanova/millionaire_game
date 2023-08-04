/*3. End Screen:
If the user answers all 15 questions correctly, redirect them to this screen
 with the title "CONGRATULATIONS YOU WON 100,000lv." Show a table with the amount they have won. 
If the user answers incorrectly or the countdown reaches 0, 
redirect them again to this screen, but display a different title:  
"End of the game. Answered questions: ..." 
along with the number of correctly answered questions (also show the table /, 
for example, see the image below).*/

import { useContext } from "react";
import Button from "../../components/Button/Button";
import styles from "./EndView.module.css";
import GameContext from "../../context/game";

//const rewards = [100, 200, 300, 400, 500, 1000, 1500, 2000, 3000, 5000, 10 000, 20 000, 30 000,50 000, 100 000,];
const rewards = {
  15: " 100 000",
  14: "50 000",
  13: "30 000",
  12: "20 000",
  11: "10 000",
  10: "5 000",
  9: "3 000",
  8: "2 000",
  7: "1 500",
  6: "1 000",
  5: 500,
  4: 400,
  3: 300,
  2: 200,
  1: 100,
};

//console.log(rewards.reverse);

// bugs found:
//can we adjust q to show correctly Which element has the chemical symbol &#039;Fe&#039;? science and nature cat was that

const EndView = () => {
  const { currentQuestionIndex, currentGameStage } = useContext(GameContext);

  return (
    <div className={styles.endViewContainer}>
      {currentGameStage === "Won" ? (
        <div>Won</div>
      ) : (
        <div className={styles.endViewText}>
          <h1>End of the game!</h1>
          <h2>Submitted wrong answer or timed out.</h2>
          <h3>Answered questions: {currentQuestionIndex}</h3>
        </div>
      )}

      <div className={styles.endViewPoints}>
        <ul>
          {Object.entries(rewards)
            .reverse()
            .map(([position, price]) => {
              return (
                <li
                  key={position}
                  className={`${position % 5 === 0 ? styles.listItemWhite : ""}
                   ${currentQuestionIndex == position ? styles.won : ""}
                  `}
                >
                  {position}: {price}
                </li>
              );
            })}
        </ul>
      </div>
      <Button clickHandler={() => currentGameStage("startGame")}>
        Play Again
      </Button>
    </div>
  );
};

export default EndView;
