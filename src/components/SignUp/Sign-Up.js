import { React, useState } from "react";
import { Button } from "../Button";
import "./Sign-Up.css";
import { Link } from "react-router-dom";

function SignUp() {
  // this doesnt do much right now but we have the username and password ready for authentication
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${name} and the password you entered was ${password}`
    );
  };
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="welcome">Welcome to OnlyFrogs</h1>
        <form onSubmit={handleSubmit}>
          <label for="username">
            <p>Username</p>
            <input
              id="field"
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              id="field"
              type="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <p>Confirm Password</p>
            <input
              id="field"
              type="password"
              className="passwordConfirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <input
              id="submit"
              type="submit"
              className="submit"
              value="submit"
            />
          </div>
        </form>
        <h4 className="member">
          Already a Member? <Link to="/Login">Sign in</Link>
        </h4>
      </div>
    </div>
  );
}
export default SignUp;