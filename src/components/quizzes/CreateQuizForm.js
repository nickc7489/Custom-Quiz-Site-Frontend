import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./CreateQuizForm.module.css";
import Buttons from "../ui/Buttons";
import Card from "../ui/Card";
import Question from "../questions/Question";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function CreateQuizForm(props) {
  const [questions, setQuestions] = useState([]);
  let { user } = useContext(AuthContext);
  const username = user ? user.username.toString() : "";
  const updateQuestions = (newState) => {
    setQuestions(newState);
  };

  const [titleState, setTitle] = useState("");
  const [descriptionState, setDescription] = useState("");
  const [authorState, setAuthor] = useState(
    user ? user.username.toString() : "Anonymous"
  );

  const navigate = useNavigate();
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

  function editTitle(event) {
    setTitle(event.target.value);
  }

  function editDescription(event) {
    setDescription(event.target.value);
  }

  function editAuthor(event) {
    if(event.target.checked){
      setAuthor("Anonymous")
    }
    else{
      setAuthor(user.username.toString())
    }
  }

  function submitHandler(event) {
    axios
      .post("https://quiz-handler.fly.dev/api/quizzes/", {
        title: titleState,
        description: descriptionState,
        questions: questions,
        author: authorState,
        username: username
      })
      .catch((err) => console.log(err.response));
    navigate("/");
    window.location.reload();
  }

  function addHandler(event) {
    var questionNumber = questions.length;
    if (questionNumber < 500) {
      setQuestions([
        ...questions,
        {
          number: questions.length + 1,
          type: "Free Response",
          ask: "",
        },
      ]);
    }
  }

  function subtractHandler(event) {
    var questionNumber = questions.length;
    if (questionNumber > 0) {
      setQuestions(questions.slice(0, -1));
    }
  }

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Quiz Title</label>
          <input required type="text" id="title" onChange={editTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input
            required
            type="text"
            id="description"
            onChange={editDescription}
          />
        </div>
        {!user ? (
            <>
              <h4 style={{color: "#77002e", margin: "7px", marginLeft: "0px"}}>WARNING: Since you aren't loggin in, the author in your quiz will be listed as "Anonymous"</h4>
            </>
          ) : (
            <></>
          )}
        <div>
          <Buttons>
            <button onClick={subtractHandler} type="button">
              -
            </button>{" "}
            {questions.length}{" "}
            <button onClick={addHandler} type="button">
              +
            </button>
          </Buttons>
          <br></br>
          {questions.map((question) => (
            <div className={classes.control}>
            <Question
              num={question.number - 1}
              updateQuestions={updateQuestions}
              questions={questions}
              key={makeid(10)}
            />
            </div>
          ))}
          {user ? (
            <>
              &nbsp;
              <label
                htmlFor="check"
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                }}
              >
                Check for the quiz author to display as 'Anonymous' instead of
                your username
              </label>
              <div>
                <input
                  required
                  type="checkbox"
                  id="check"
                  onChange={editAuthor}
                />
              </div>
            </>
          ) : (
            <></>
          )}
          <div className={classes.actions} style={{ display: "flex" }}>
            <button
              action="submit"
              className={classes.actions}
              onClick={submitHandler}
              style={{ alignSelf: "flexStart", marginTop: "7px" }}
            >
              Create Quiz
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default CreateQuizForm;
