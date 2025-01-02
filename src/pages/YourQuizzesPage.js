import { useContext, useState, useEffect } from "react";

import AuthContext from "../context/AuthContext";
import axios from "axios";
import YourQuizItem from "../components/quizzes/YourQuizItem"

function YourQuizzesPage() {
  let { user } = useContext(AuthContext);
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    axios.get("https://quiz-handler.fly.dev/api/quizzes/").then((response) => {
      setQuizzes(response.data);
    });
  }, []);
  return (
    <>
      <br></br>
      <h1 style={{ textAlign: "center", fontSize: "1.75rem" }}>
        Your Quizzes: {user.username}
      </h1>
      <br></br>
        {quizzes.map((quiz) => (
          quiz.username.toString().localeCompare(user.username.toString()) === 0 ? (
          <YourQuizItem
            quiz={quiz}
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
          />
        ):(<></>)
        ))}
    </>
  );
}

export default YourQuizzesPage;
