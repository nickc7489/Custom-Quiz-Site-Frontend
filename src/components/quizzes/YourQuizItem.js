import Card from "../../components/ui/Card";
import classes from "./CreateQuizForm.module.css";
import { useNavigate } from "react-router-dom";

function YourQuizItem(props) {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/analytics", { state: { title: props.title, attempts: props.quiz.attempts } });
  }
  return (
    <div style={{ margin: "auto", width: "20rem", height: "7rem" }}>
      <Card>
        <h3 style={{ textAlign: "center", margin: "0.5rem" }}>{props.title}</h3>
        <div
          className={classes.actions}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            onClick={clickHandler}
            style={{ margin: "0.3rem", marginTop: "0rem" }}
          >
            Analytics
          </button>
        </div>
      </Card>
    </div>
  );
}

export default YourQuizItem;
