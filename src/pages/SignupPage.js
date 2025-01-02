import classes from "./LoginPage.module.css";
import Card from "../components/ui/Card";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignupPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser }  = useContext(AuthContext);
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    registerUser(username, password, password2);
    navigate("/login");
  }

  function editUsername(event) {
    setUsername(event.target.value);
  }

  function editPassword(event) {
    setPassword(event.target.value);
  }

  function editPassword2(event) {
    setPassword2(event.target.value);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Sign Up</h1>
      <h4 style={{ textAlign: "center", color: "gray", margin: "12px" }}>
        This will allow you to create quizzes
      </h4>
      <div
        style={{
          margin: "auto",
          width: "400px",
        }}
      >
        <Card>
          <div style={{ padding: "8px" }}>
            <form>
              <div className={classes.control}>
                <label htmlFor="userName" style={{ fontWeight: "bold" }}>
                  Username
                </label>
                <input
                  required
                  type="text"
                  id="userName"
                  onChange={editUsername}
                  style={{
                    width: "380px",
                    display: "block",
                  }}
                ></input>
                <br></br>
                <label htmlFor="password" style={{ fontWeight: "bold" }}>
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="password"
                  onChange={editPassword}
                  style={{
                    width: "385px",
                    display: "block",
                  }}
                ></input>
                <br></br>
                <label htmlFor="password2" style={{ fontWeight: "bold" }}>
                  Type password again:
                </label>
                <input
                  required
                  type="password"
                  id="password2"
                  onChange={editPassword2}
                  style={{
                    width: "385px",
                    display: "block",
                  }}
                ></input>
              </div>
              {password2 !== password ? (
                <p>Passwords do not match</p>
              ) : (
                <br></br>
              )}
              <br></br>
              <div className={classes.actions}>
                <button
                  action="submit"
                  onClick={submitHandler}
                  style={{ width: "6rem" }}
                >
                  <h2 style={{ fontSize: "18px", margin: "5px" }}>Sign Up</h2>
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SignupPage;
