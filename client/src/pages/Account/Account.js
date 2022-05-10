import React, { useState } from 'react';
import "./Account.css";
import favorite_items from "./favorites";

const Account = () => {

    const [page, setPage] = useState(0);
    const [userData, setUserData] = useState({
        username: 'testUser',
        email: 'user@test.tld',
        first_name: 'test',
        last_name: 'user'
    });

    // Making this a constant for now as db doesn't store images.
    const img = 'https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg';

    const {username,email,first_name,last_name} = (info.username == '') ? getDefaults() : info;

    function getPage() {
        if (page == 0) {
            return (<div className="account-settings">
            <div className="heading-container">
                <h4>Account Settings</h4>
            </div>
            <div className="col contact-info">
                <div className="contact"><label>Name</label><input type="text" placeholder="enter first name" value={first_name} autocomplete="chrome-off"/></div>
                <div className="contact"><label>Surname</label><input type="text" placeholder="enter last name" value={last_name} autocomplete="chrome-off"/></div>
                <div className="contact"><label>Email</label><input type="email" placeholder="enter email id" value={email} autocomplete="chrome-off"/></div>
            </div>
            <div className="submit-button-container"><button className="btn-primary" type="button">Save Profile</button></div>
        </div>);
        }
        else if (page == 1) {
            const favoriteItems = favorite_items.map((item) => (
                <div className="favorite-item" key={item.id}>
                    <img src={item.thumb}></img>
                    <div className="favorite-item-info">
                        <h5>{item.product_name}</h5><br />
                        <p>{item.description}</p>
                    </div>
                </div>
            ));
            return (<div className="account-favorites">
                {favoriteItems}
            </div>);
        }
    }

    return (<div className="account-container">
        <div className="col">
            <div className="account-info-container">
                <div className="account-info">
                  <img className="profile-img" width="150px" src={img} />
                  <b>{username}</b>
                  <span className="email">{email}</span>
                </div>
                <div className="settings" onClick={() => setPage(0)}>Settings</div>
                <div className="favorites" onClick={() => setPage(1)}>Favorites</div>
            </div>
            <div className="account-settings-container">
                {getPage()}
            </div>
        </div>
    </div>);
}

export default Account;