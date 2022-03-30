import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        const products = {
            "Frogs":"#",
            "Toads":"#",
            "Green Amphibians":"#",
            "Tadpoles?":"#"
        };
        const socials = {
            "Contact Us":"#",
            "Facebook":"#",
            "Twitter":"#",
            "Youtube":"#"
        };
        let key = "";
        this.productLinks = [];
        for (key in products) {
            this.productLinks.push(
                <li><a href={products[key]} className="footer-link">{key}</a></li>
            );
        }
        this.socialLinks = [];
        for (key in socials) {
            this.socialLinks.push(
                <li><a href={socials[key]} className="footer-link">{key}</a></li>
            );
        }
    }

    render () {
        return (<div className="footer-content">
            <div className="padding"></div>
            <div className="footer-ul-container">
                <ul className="category">
                    <li className="category-title">Products</li>
                    {this.productLinks}
                </ul>
                <ul className="category">
                    <li className="category-title">Socials</li>
                    {this.socialLinks}
                </ul>
            </div>
        </div>);
    }
}

export default Footer;