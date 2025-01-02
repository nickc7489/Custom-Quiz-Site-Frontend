import { useState, useEffect } from "react";

import QuizList from "../components/quizzes/QuizList";
import axios from "axios";

function MainPage() {
  const [loadedQuizzes, setLoadedQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://quiz-handler.fly.dev/api/quizzes/").then((response) => {
      setIsLoading(false);
      setLoadedQuizzes(response.data);
    });
  }, []);
  function inputHandler(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Search Quizzes</h1>
      {/*
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Search By:</h3>
        &nbsp; &nbsp;
        <input
          type="text"
          placeholder="Title"
          onChange={inputHandler}
          style={{
            fontFamily: "Open Sans",
            color: "#2c292b",
            fontSize: "1.1rem",
            margin: "6px",
            width: "230x",
            height: "30px",
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={inputHandler}
          style={{
            fontFamily: "Open Sans",
            color: "#2c292b",
            fontSize: "1.1rem",
            margin: "6px",
            width: "230px",
            height: "30px",
          }}
        />
        <input
          type="text"
          placeholder="Author username"
          onChange={inputHandler}
          style={{
            fontFamily: "Open Sans",
            color: "#2c292b",
            fontSize: "1.1rem",
            margin: "6px",
            width: "230px",
            height: "30px",
          }}
        />
      </div>
        */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search by title"
          onChange={inputHandler}
          style={{
            fontFamily: "Open Sans",
            color: "#2c292b",
            fontSize: "1.1rem",
            width: "230x",
            height: "30px",
          }}
        />
      </div>
      {isLoading ? (
        <section>
          <p>Loading...</p>
        </section>
      ) : (
        <section>
          <h1>
            <QuizList quizzes={loadedQuizzes} input={input} />
          </h1>
        </section>
      )}
    </>
  );
}

export default MainPage;
