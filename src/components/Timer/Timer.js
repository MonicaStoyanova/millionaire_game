import { useContext, useEffect } from "react";
import useTimerHook from "../../hooks/useTimerHook";

import styles from "./Timer.module.css";
import GameContext from "../../context/game";

function Timer() {
  const [seconds] = useTimerHook(60);
  const { currentGameStage } = useContext(GameContext);

  useEffect(() => {
    if (seconds === 0) {
      currentGameStage("gameOver");
    }
  }, [seconds]);

  return (
    <div className={styles.timer}>
      <span>{seconds}</span>
    </div>
  );
}

export default Timer;
