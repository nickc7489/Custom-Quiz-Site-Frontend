import CreateQuizForm from "../components/quizzes/CreateQuizForm";

import classes from './CreatePage.module.css'

function CreatePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Quiz</h1>
      <div className={classes.container}>
        <CreateQuizForm />
      </div>
    </div>
  );
}

export default CreatePage;
