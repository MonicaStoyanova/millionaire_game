import { useContext } from "react";
import styles from "./Next.module.css";
import GameContext from "../../context/game";

function Next() {
  const { nextQuestion } = useContext(GameContext);
  return (
    <button className={styles.next} onClick={() => nextQuestion()}>
      Next
    </button>
  );
}
export default Next;
