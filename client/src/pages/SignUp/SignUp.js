import { React, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  // this doesnt do much right now but we have the username and password ready for authentication
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
              id="username"
              type="text"
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              id="password"
              type="password"
              className="field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <p>Confirm Password</p>
            <input
              id="passwordConfirm"
              type="password"
              className="field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
