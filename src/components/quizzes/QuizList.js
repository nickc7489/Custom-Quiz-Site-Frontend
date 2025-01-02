import classes from "./QuizList.module.css";

import QuizItem from "./QuizItem";

function QuizList(props) {
  if (props.input !== "") {
    return (
      <ul className={classes.list}>
        {props.quizzes.map((quiz) => (
          quiz.title.toLowerCase().includes(props.input.toLowerCase()) ? (
          <QuizItem
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            questions={quiz.questions}
            author={quiz.author}
            username={quiz.username}
            attempts={quiz.attempts}
          />
        ):(<div key={quiz.id} style={{display: "inline"}}></div>)
        ))}
      </ul>
    );
  } else {
    return (
      <ul className={classes.list}>
        {props.quizzes.map((quiz) => (
          <QuizItem
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            questions={quiz.questions}
            attempts={quiz.attempts}
            author={quiz.author}
          />
        ))}
      </ul>
    );
  }
}

export default QuizList;
