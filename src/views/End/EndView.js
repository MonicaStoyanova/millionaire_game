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

const rewards = [
  100, 200, 300, 400, 500, 1000, 1500, 2000, 3000, 5000, 10000, 20000, 30000,
  50000, 100000,
];

console.log(rewards.reverse);
// bugs found:
//the counter does not show corecct ans q
// if you fail to ans the 1st question -1 appears
// i alaso answ 3 questions but only 1 appears on the end screen
//maybe we should clear somehow previous achievment
//by pressing mythology and easy error occurs
//can we adjust q to show correctly Which element has the chemical symbol &#039;Fe&#039;? science and nature cat was that
//when you reach end of game due to incorrect answer and press play again same cat and diff, you begin from question number you failed insted of num 1
//when you answer correctly, the timer does not resets to the new question, it continues to count down ex if you ans a q in the 39 s, when next q appears it counts from that number 39-38

const EndView = () => {
  const { currentQuestionIndex, currentGameStage } = useContext(GameContext);

  return (
    <div className={styles.endViewContainer}>
      <div className={styles.endViewText}>
        <h1>End of the game!</h1>
        <h2>Submitted wrong answer or timed out.</h2>
        <h3>Answered questions: {currentQuestionIndex - 1}</h3>
      </div>

      <div className={styles.endViewPoints}>
        <ul>
          <li className={styles.listItemWhite}>15: 100 000</li>
          <li>14: 50 000</li>
          <li>13: 30 000</li>
          <li>12: 20 000</li>
          <li>11: 10 000</li>
          <li className={styles.listItemWhite}>10: 5 000</li>
          <li>9: 3 000</li>
          <li>8: 2 000</li>
          <li>7: 1 500</li>
          <li>6: 1 000</li>
          <li className={styles.listItemWhite}>5: 500</li>
          <li>4: 400</li>
          <li>3: 300</li>
          <li>2: 200</li>
          <li>1: 100</li>
        </ul>
      </div>
      <Button clickHandler={() => currentGameStage("startGame")}>
        Play Again
      </Button>
    </div>
  );
};

export default EndView;
