import { useLocation } from "react-router-dom";
import Card from "../components/ui/Card";

function AnalyticsPage() {
  const location = useLocation();
  const attempts = location.state.attempts;
  const title = location.state.title;
  return (
    <>
      <br></br>
      <h1 style={{ textAlign: "center", fontSize: "1.75rem" }}>
        Analytics: {title}
      </h1>
      {attempts.map((attempt) => (
        <div style={{ margin: "auto", width: "20rem", height: "7rem" }}>
          <Card>
            <h3 style={{ textAlign: "center", margin: "0.5rem" }}>
              User: {attempt.taker}
            </h3>
            <h3 style={{ textAlign: "center", margin: "0.5rem" }}>
              Score: {attempt.score}
            </h3>
            <h3 style={{ textAlign: "center", margin: "0.5rem" }}>
              Time: {attempt.time}
            </h3>
          </Card>
        </div>
      ))}
    </>
  );
}

export default AnalyticsPage;
