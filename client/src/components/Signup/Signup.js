import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import Axios from 'axios';
import "./Signup.css";


function Signup(props) {

    const emptyUser = { firstNameInput: '', lastNameInput: '', emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'

    const [formData, setFormData] = useState(emptyUser)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')
    const [firstNameColor, setFirstNameColor] = useState('')
    const [lastNameColor, setLastNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault()

        let newUser = {
            firstName: formData.firstNameInput,
            lastName: formData.lastNameInput,
            email: formData.emailInput,
            password: formData.passwordInput
        }
        if (validateUserInput(newUser)) {
            postNewUser(newUser)
            setFormData(emptyUser)
        } else {
            setCredsAreInvalid(errorMessage)
        }
    }

    const validateUserInput = ({ firstName, lastName, email, password }) => {
        let isValid = true;

        if (!firstName) {
            setFirstNameColor('text-danger')
            isValid = false;
        } else {
            setFirstNameColor('')
        }

        if (!lastName) {
            setLastNameColor('text-danger')
            isValid = false;
        } else {
            setLastNameColor('')
        }

        if (!email) {
            setEmailColor('text-danger')
            isValid = false;
        } else {
            setEmailColor('')
        }

        if (!password) {
            setPasswordColor('text-danger')
            isValid = false;
        } else {
            setPasswordColor('')
        }

        return isValid;
    }

    const postNewUser = newUser => {
        Axios.post('/api/users/signup', newUser)
            .then(() => {
                props.navigate('/login' , { replace: true })
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="welcome">Welcome to OnlyFrogs</h1>
        <form onSubmit={handleSubmit}>
        <div controlId="inputFirstName">
                <label className={firstNameColor}>FirstName</label>
                <input name="firstNameInput" type="text" placeholder="" value={formData.firstNameInput} onChange={handleInputChange} />
            </div>
            <div controlId="inputLastName">
                <label className={lastNameColor}>LastName</label>
                <input name="lastNameInput" type="text" placeholder="" value={formData.lastNameInput} onChange={handleInputChange} />
            </div>
            <div controlId="emailInput">
                <label className={emailColor}>Email address</label>
                <input name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />
                <p className="text-muted">
                    We'll never share your email with anyone else.
                </p>
            </div>
            <div controlId="inputPassword">
                <label className={passwordColor}>Password</label>
                <input name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
            </div>
            <div>
                <p className="text-danger">
                    {credsAreInvalid}
                </p>
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
        <h4 className="member">
          Already a Member? <Link to="/Login">Sign in</Link>
        </h4>
      </div>
    </div>
  );
}
export default Signup;
