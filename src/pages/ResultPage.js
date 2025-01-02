import { useLocation, useNavigate } from "react-router-dom";

import classes from "../components/quizzes/QuizItem.module.css";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state.score;
  const questions = location.state.questions;
  const key = [];
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  for (var k = 0; k < questions.length; k++) {
    const question = questions[k];
    if (question.hasOwnProperty("options")) {
      if (question.type === "Multiple Choice") {
        var an = "";
        for (var i = 0; i < question.options.length; i++) {
          const option = question.options[i];
          if (option.correct) {
            an = option.text;
          }
        }
        key.push(an);
      } else {
        var ans = "";
        for (var j = 0; j < question.options.length; j++) {
          if (j === 0) {
            ans = question.options[j].text;
          } else {
            ans = ans + ", " + question.options[j].text;
          }
        }
        key.push(ans);
      }
    } else {
      key.push("");
    }
  }
  function returnHandler() {
    navigate("/");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Score: {score} out of {questions.length}
      </h1>
      <br></br>
      <h2>Answer Key:</h2>
      {questions.map((question) => (
        <div key={makeid(10)}>
          <h3 key={makeid(10)}>
            Question {question.number}: {question.ask}
          </h3>
          <h3 key={makeid(10)}>Answer(s): {key[question.number - 1]}</h3>
          <br key={makeid(10)}></br>
        </div>
      ))}
      <div className={classes.actions}>
        <button onClick={returnHandler}>
          <h2>Back to main page</h2>
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
