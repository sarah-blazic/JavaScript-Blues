import React, { Component } from "react";
import FeaturedDot from "./FeaturedDot";
import "./Featured.css";
import $ from 'jquery';

class Featured extends Component {

    constructor (props) {
        super(props);
        this.state = {
            curr_img: 1,
            enable_scroll: true
        };
        this.dots = [];
        this.max_img = 0;
        this.scroll = this.scroll.bind(this);
        
        // Getting Images
        let r = require.context('../../images', false, /\.(png|jpe?g|svg)$/);
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        this.max_img = Object.keys(images).length;
        console.log(this.max_img);
        this.imgs = [];
        this.points = [];
        let err_message = "Image not found.";
        for (var i = 1; i <= this.max_img; i++) {
            let name = "frog" + i + ".jpg";
            this.imgs.push(
                <div className="image-holder">
                    <img src={images[name]} alt={err_message} className="image"/>
                </div>
            );
            var dotRef = React.createRef();
            this.dots[i] = dotRef;
            this.points.push(
                <FeaturedDot ref={dotRef} />
            );
        }
    }

    enable() {
        this.setState({enable_scroll: true});
    }

    update(curr) {
        for (var i = 1; i <= this.max_img; i++) {
            this.dots[i].current.setState({active: ((curr == i) ? true : false )});
        }
    }

    scroll (direction) {
        if (this.state.enable_scroll) {
            var new_curr = this.state.curr_img + direction;
            if (new_curr < 1)
                return;
            if (new_curr > this.max_img)
                return;
            this.setState({curr_img: new_curr});
            this.setState({enable_scroll: false});
            let far = $(".image-container").width()*direction;
            let pos = $(".image-container").scrollLeft() + far;
            $(".image-container").animate({scrollLeft: pos}, 1000, () => { this.enable() });
            this.update(new_curr);
            this.forceUpdate();
        }
    }

    componentDidMount () {
        this.dots[this.state.curr_img].current.setState({active: true});
    }

    render () {
        return (<div className="featured-wrapper">
                <div className="image-container">
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