import React, { Component } from "react";
import FeaturedDot from "./FeaturedDot";
import "./Featured.css";

class Featured extends Component {

    constructor (props) {
        super(props);
        this.curr_img = 1;
        this.enable_scroll = true;
        this.dots = [];
        this.max_img = 0;
        this.scroll = this.scroll.bind(this);
        
        // Getting Images
        let r = require.context('../../images', false, /\.(png|jpe?g|svg)$/);
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        this.max_img = Object.keys(images).length;
        
        this.imgs = [];
        this.points = [];
        let err_message = "Image not found.";
        for (var i = 1; i <= this.max_img; i++) {
            let name = "frog" + i + ".jpg";
            this.imgs.push(
                <img key={name} src={images[name]} alt={err_message} className="image"/>
            );
            var dotRef = React.createRef();
            this.dots[i] = dotRef;
            this.points.push(
                <FeaturedDot key={name} ref={dotRef} />
            );
        }

        document.documentElement.style.setProperty("--total", this.max_img);
    }

    enable() {
        this.enable_scroll = true;
    }

    update(curr) {
        for (var i = 1; i <= this.max_img; i++) {
            this.dots[i].current.setState({active: ((curr == i) ? true : false )});
        }
    }

    scroll (direction) {
        if (this.enable_scroll) {
            var new_curr = this.curr_img + direction;
            if (new_curr < 1)
                return;
            if (new_curr > this.max_img)
                return;
            this.curr_img = new_curr;
            this.enable_scroll = false;
            document.documentElement.style.setProperty("--curr", this.curr_img - 1);
            this.update(new_curr);
            this.enable_scroll = true;
        }
    }

    componentDidMount () {
        //this.curr_img = getComputedStyle(document.documentElement).getPropertyValue("--curr") + 1;
        //this.dots[this.curr_img].current.setState({active: true});
    }

    render () {
        return (<div className="featured-wrapper">
                <div className="image-container transform">
                    {this.imgs}
                </div>
                <div className="scroll-container">
                    <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
                    {this.points}
                    <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
                </div>
            </div>);
    }

}

export default Featured;