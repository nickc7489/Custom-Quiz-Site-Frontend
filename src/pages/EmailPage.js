import classes from "./LoginPage.module.css";
import Card from "../components/ui/Card";
import { useState } from "react";

function EmailPage(props) {
  const [email, setEmail] = useState("");

  function editEmail(event) {
    setEmail(event.target.value);
  }

  function submitHandler() {}

  return (
    <div
      style={{
        margin: "auto",
        width: "400px",
      }}
    >
      <Card>
        <div style={{ padding: "8px", marginTop: "6rem" }}>
          <form>
            <div className={classes.control}>
              <label htmlFor="email" style={{ fontWeight: "bold" }}>
                Enter email to send password to:
              </label>
              <input
                required
                type="text"
                id="email"
                onChange={editEmail}
                style={{
                  width: "380px",
                  display: "block",
                }}
              ></input>
            </div>
            <br></br>
            <div className={classes.actions}>
              <button
                action="submit"
                onClick={submitHandler}
                style={{ width: "6rem" }}
              >
                <h2 style={{ fontSize: "16px", margin: "5px" }}>Send Email</h2>
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default EmailPage;
