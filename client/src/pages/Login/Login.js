import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Axios from "axios";
import "./Login.css";

const Login = (props) => {
  // this doesnt do much right now but we have the username and password ready for authentication
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const emptyCreds = { emailInput: "", passwordInput: "" };
  const errorMessage = "invalid credentials";
  const [formData, setFormData] = useState(emptyCreds);
  const [credsAreInvalid, setCredsAreInvalid] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputCreds = {
      email: formData.emailInput,
      password: formData.passwordInput,
    };
    login(inputCreds);
    setFormData(emptyCreds);
  };

  const login = (loginCreds) => {
    Axios.post("/api/users/login", loginCreds)
      .then((user) => {
        console.log("login response ", user);
        setIsAuth(true);
      })
      .catch((err) => {
        setCredsAreInvalid(errorMessage);
        console.log(err);
      });
  };

  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <div className="wrapper">
      <div className="container">
        <h1 className="welcome">Welcome Back to OnlyFrogs</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Username"
              className="field"
              type="text"
              name="emailInput"
              value={formData.emailInput}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
              placeholder="Password"
              className="field"
              type="password"
              name="passwordInput"
              value={formData.passwordInput}
              onChange={handleInputChange}
            />
          </label>
          <p className="text-danger">{credsAreInvalid}</p>
          <h4 className="forgotPass">
            <Link to="/forgotPassword">Forgot Password</Link>
          </h4>
          <div>
            <Button type="submit" className="submit" id="submit" value="submit">
              Submit
            </Button>
          </div>
        </form>
        <h4 className="member">Don't have an account yet?</h4>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.navigate("../signup", { replace: true });
          }}
        >
          Signup
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.navigate("../", { replace: true });
          }}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
export default Login;
