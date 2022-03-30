import React, { Component } from 'react';
import "./Account.css";

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
        };
    }

    getDefaults() {
       return {
            username: 'testUser',
            email: 'user@test.tld',
            first_name: 'test',
            last_name: 'user'
       };
    }

    render () {
        const {username,email,first_name,last_name} = (this.state.username == '') ? this.getDefaults() : this.state;
        return (<div className="info-wrapper">
            <div className="username">
                <h1>Personal Info</h1>
                <label for="u_name">Username</label>
                <input id="u_name" value={username}></input>
                <label for="u_email">Email</label>
                <input id="u_email" value={email}></input>
                <label for="u_fname">First Name</label>
                <input id="u_fname" value={first_name}></input>
                <label for="u_lname">Last Name</label>
                <input id="u_lname" value={last_name}></input>
                
            </div>
        </div>);
    }
}

export default Account;