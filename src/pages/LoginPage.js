import classes from "./LoginPage.module.css";
import Card from "../components/ui/Card";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /*const [rememberMe, setRememberMe] = useState("");*/
  const { loginUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    username.length > 0 && loginUser(username, password);
    navigate("/");
  }

  function editUsername(event) {
    setUsername(event.target.value);
  }

  function editPassword(event) {
    setPassword(event.target.value);
  }

  /*function editRememberMe() {
    setRememberMe(!rememberMe);
  }*/
  if (!user) {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Login</h1>
        <h4 style={{ textAlign: "center", color: "gray", margin: "12px" }}>
          Welcome Back!
        </h4>
        <div
          style={{
            margin: "auto",
            width: "25rem",
          }}
        >
          <Card>
            <div style={{ padding: "0.5rem" }}>
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
                    onChange={editPassword}
                    style={{
                      width: "385px",
                      display: "block",
                    }}
                  ></input>
                </div>
                {/*
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  margin: "2px",
                  marginTop: "8px",
                  marginRight: "0px",
                }}
              >
                Remember me?
              </p>
              <input
                id="rememberMe"
                type="checkbox"
                onChange={editRememberMe}
                style={{ margin: "2px", marginRight: "0px" }}
              ></input>
              */}
                <br></br>
                <div className={classes.actions}>
                  <button
                    action="submit"
                    onClick={submitHandler}
                    style={{ width: "6rem" }}
                  >
                    <h2 style={{ fontSize: "18px", margin: "5px" }}>Login</h2>
                  </button>
                </div>
                <hr style={{ width: "200px", marginTop: "10px" }}></hr>
                {/*
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    margin: "3px",
                  }}
                >
                  Have an email but forgot your password?
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    style={{
                      fontSize: "15px",
                      margin: "5px",
                    }}
                    to="/email"
                  >
                    Click HERE
                  </Link>
                </div>
                  */}
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    margin: "3px",
                  }}
                >
                  Don't have an account?
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    style={{
                      fontSize: "15px",
                      margin: "5px",
                    }}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default LoginPage;
