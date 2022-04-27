import React, { Component } from 'react';
import "./Account.css";

const Account = () => {

    let info = {
        img: '',
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        address: {
            line_1: '',
            line_2: '',
            postal_code: '',
            state: '',
            country: '',
            state: '',
            city: ''
        }
    };

    function getDefaults() {
       return {
            img: 'https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg',
            username: 'testUser',
            email: 'user@test.tld',
            first_name: 'test',
            last_name: 'user',
            phone_number: '',
            address: {
                line_1: '5555 Notreal Ave.',
                line_2: 'APT 555',
                postal_code: '55555',
                state: 'State',
                country: 'Country',
                city: 'City'
            }
       };
    }

    const {img,username,email,first_name,last_name,phone_number,address} = (info.username == '') ? getDefaults() : info;

    return (<div className="account-container">
        <div className="col">
            <div className="account-info-container">
                <div className="account-info">
                  <img className="profile-img" width="150px" src={img} />
                  <b>{username}</b>
                  <span className="email">{email}</span>
                </div>
            </div>
            <div className="account-settings-container">
                <div className="account-settings">
                    <div className="heading-container">
                        <h4>Account Settings</h4>
                    </div>
                    <div className="col contact-info">
                        <div className="contact"><label>Name</label><input type="text" placeholder="enter first name" value={first_name} autocomplete="chrome-off"/></div>
                        <div className="contact"><label>Surname</label><input type="text" placeholder="enter last name" value={last_name} autocomplete="chrome-off"/></div>
                        <div className="contact"><label>Email</label><input type="email" placeholder="enter email id" value={email} autocomplete="chrome-off"/></div>
                        <div className="contact"><label>Mobile Number</label><input type="tel" placeholder="enter phone number" value={phone_number} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" autocomplete="chrome-off"/></div>
                    </div>
                    <div className="col address-container">
                        <div className="address"><label>Address Line 1</label><input type="text" placeholder="enter address line 1" value={address.line_1} autocomplete="chrome-off"/></div>
                        <div className="address"><label>Address Line 2</label><input type="text" placeholder="enter address line 2" value={address.line_2} autocomplete="chrome-off"/></div>
                        <div className="address"><label>Postcode</label><input type="text" placeholder="enter postcode" value={address.postal_code} autocomplete="chrome-off"/></div>
                        <div className="address"><label>Country</label><input type="text" placeholder="enter country" value={address.country} autocomplete="chrome-off"/></div>
                        <div className="address"><label>State</label><input type="text" placeholder="enter state" value={address.state} autocomplete="chrome-off"/></div>
                        <div className="address"><label>City</label><input type="text" placeholder="enter city" value={address.city} autocomplete="chrome-off"/></div>
                    </div>
                    <div className="submit-button-container"><button className="btn-primary" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>);
}

export default Account;