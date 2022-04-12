import React, { Component } from "react";
import "./BlockText.css";

class BlockText extends Component {
    constructor (props) {
        super(props);

        this.headerText = props.headerText;

        var textArr = props.text.split("\n");
        textArr.splice(0, 1);
        textArr.pop();
        this.textHTML = [];

        for (var line of textArr) {
            this.textHTML.push(<p>{line}</p>);
            this.textHTML.push(<br />);
        }

        this.textHTML.pop();
    }

    render () {
        var header = "";
        if (!(this.headerText === "")) {
            header = <h1 className="title">{this.headerText}</h1>
        }

        return (
        <div className="about-us-wrapper">
            {header}
            <div className="text-wrapper">
                {this.textHTML}
            </div>
        </div>
        );
    }
}

export default BlockText;