import React, { Component } from 'react';
import "./Featured.css";

class FeaturedDot extends Component {
    constructor (props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render () {
        return ( <i class={(this.state.active ? "fa-solid" : "fa-regular") + " fa-circle featured-point"} /> );
    }
}

export default FeaturedDot;