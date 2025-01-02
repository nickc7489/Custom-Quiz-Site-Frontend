import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import Card from "../components/ui/Card";
import GenerateOptions from "../components/ui/GenerateOption";
import classes from "../components/quizzes/QuizItem.module.css";

import axios from "axios";
import AuthContext from "../context/AuthContext";

function TakePage() {
  const location = useLocation();
  const title = location.state.title;
  const description = location.state.description;
  const questions = location.state.questions;
  const author = location.state.author;
  const username = location.state.username;
  const attempts = location.state.attempts;
  const id = location.state.id;
  const [record, setRecord] = useState([Array(questions.length).fill(false)]);
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);
  let taker = user ? user.username.toString() : "Anonymous";

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
  function submitHandler() {
    const d = Date();
    var score = 0;
    for (const answer in record) {
      if (record[answer] === true) {
        score += 1;
      }
    }
    let newAttempts = [...attempts, { taker: taker, score: score, time: d }];
    axios
      .put("https://quiz-handler.fly.dev/api/quizzes/" + id + "/", {
        id: id,
        title: title,
        description: description,
        questions: questions,
        author: author,
        username: username,
        attempts: newAttempts,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/result", { state: { score: score, questions: questions } });
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <h3>{description}</h3>
        {questions.map((question) => (
          <div style={{width: "30rem", margin: "auto"}}>
          <Card key={makeid(10)} style={{ margin: "auto", width: "900px" }}>
            <h4>
              Question {question.number} - {question.ask}
            </h4>
            <GenerateOptions
              key={makeid(10)}
              options={question.options}
              type={question.type}
              setRecord={setRecord}
              record={record}
              id={question.number - 1}
            />
            
          </Card>
          </div>
        ))}
        <div className={classes.actions}>
          <button onClick={submitHandler}>
            <h2>Submit</h2>
          </button>
        </div>
      </div>
    </>
  );
}

export default TakePage;
