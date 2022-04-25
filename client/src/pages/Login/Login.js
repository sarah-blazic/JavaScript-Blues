import { React, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
        <h1 className="welcome">Welcome Back to OnlyFrogs</h1>
        <form onSubmit={handleSubmit}>
          <label for="username">
            <input
              placeholder="Username"
              className="field"
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Password"
              className="field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <h4 className="forgotPass">
            <Link to="/forgotPassword">Forgot Password</Link>
          </h4>
          <div>
            <input
              type="submit"
              className="submit"
              id="submit"
              value="submit"
            />
          </div>
        </form>
        <h4 className="member">
          Don't have an account yet? <Link to="/signUp">Sign up</Link>
        </h4>
      </div>
    </div>
  );
}
export default Login;
