import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (<div className="footer-content">
            <div className="icons-container">
                <i className="fa-brands fa-twitter-square fa-2xl icon"></i>
                <i className="fa-brands fa-facebook-square fa-2xl icon"></i>
                <i className="fa-brands fa-instagram-square fa-2xl icon"></i>
            </div>
        </div>);
    }
}

export default Footer;