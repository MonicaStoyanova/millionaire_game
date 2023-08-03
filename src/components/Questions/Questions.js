import styles from "./Question.module.css";

export default function Question() {
  return (
    <div className="questionLayout">
      <div className="question">Question will appear here dynamically</div>
      <div className="answers">Possible answer</div>
    </div>
  );
}
