import questions from "../images/questions.jpg";

function QuestionView() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${questions})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>timer</div>
      <div>sound</div>
      <div>questions and answers</div>
    </div>
  );
}
