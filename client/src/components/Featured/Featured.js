import React, { Component } from "react";
import FeaturedDot from "./FeaturedDot";
import "./Featured.css";
import featured_images from "./featured_data";

class Featured extends Component {

    constructor (props) {
        super(props);
        this.curr_img = 1;
        this.dots = [];
        this.max_img = featured_images.total;
        this.scroll = this.scroll.bind(this);
        
        // Getting Images
        this.max_img = featured_images.total;
        
        this.imgs = [];
        this.points = [];
        let err_message = "Image not found.";
        for (var i = 1; i <= this.max_img; i++) {
            this.imgs.push(
                <img key={featured_images["_" + i].name} src={featured_images["_" + i].uri} alt={err_message} className="image"/>
            );
            var dotRef = React.createRef();
            this.dots[i] = dotRef;
            this.points.push(
                <FeaturedDot key={featured_images["_" + i].name} ref={dotRef} />
            );
        }

        document.documentElement.style.setProperty("--total", this.max_img);
    }

    update(curr) {
        for (var i = 1; i <= this.max_img; i++) {
            this.dots[i].current.setState({active: ((curr == i) ? true : false )});
        }
    }

    scroll (direction) {
        var new_curr = this.curr_img + direction;
        if (new_curr < 1)
            return;
        if (new_curr > this.max_img)
            return;
        this.curr_img = new_curr;
        document.documentElement.style.setProperty("--curr", this.curr_img - 1);
        this.update(new_curr);
    }

    componentDidMount () {
        //this.curr_img = getComputedStyle(document.documentElement).getPropertyValue("--curr") + 1;
        this.dots[this.curr_img].current.setState({active: true});
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