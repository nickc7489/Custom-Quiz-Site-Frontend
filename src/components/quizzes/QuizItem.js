import classes from "./QuizItem.module.css";

import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";

function QuizItem(props) {
  const navigate = useNavigate();
  const isThereAuthor = props.author !== "";

  function takeQuizHandler() {
    navigate("/take-quiz", {
      state: {
        title: props.title,
        description: props.description,
        questions: props.questions,
        author: props.author,
        username: props.username,
        attempts: props.attempts,
        id: props.id
      },
    });
  }

  return (
    <div className={classes.container}>
      <li className={classes.item}>
        <div>
        <Card>
          <div className={classes.content}>
            <p style={{margin: "1rem"}}>{props.title}</p>
            <h3>{props.description}</h3>
            <h3>Number of questions: {Object.keys(props.questions).length}</h3>
            {isThereAuthor ? (
              <h3>Author: {props.author}</h3>
            ) : (
              <></>
            )}
          </div>
          <div className={classes.actions}>
            <button onClick={takeQuizHandler}>
              <h2>Take Quiz</h2>
            </button>
          </div>
        </Card>
        </div>
      </li>
    </div>
  );
}

export default QuizItem;
