import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quiz Creator</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Search Quizzes</Link>
          </li>
          <li>
            <Link to="/create">Make A Quiz</Link>
          </li>
          {!user ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/your-quizzes">My Quizzes</Link>
              </li>
              <li>
                <Link to="/" onClick={ logoutUser }>Logout</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
