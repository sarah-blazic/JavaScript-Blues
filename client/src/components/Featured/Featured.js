import React, { useEffect, useState } from 'react';
import "./Featured.css";
import featured_images from "./featured_data";

const Featured = () => {

    document.documentElement.style.setProperty("--total", featured_images.length);

    const [currImage, setCurrImage] = useState(1);

    const imageList = featured_images.map((image) => (
        <img key={image.name} src={image.uri} alt="No image found." className="image" />
    ));

    function scrollTo(new_curr) {
        document.documentElement.style.setProperty("--curr", new_curr - 1);
        setCurrImage(new_curr);
    }

    const dotList = [];
    for (var i = 1; i <= featured_images.length; i++) {
        let temp = i;
        dotList.push(<i 
            key={featured_images[i - 1].name}
            className={(featured_images[i - 1].id === currImage ? "fa-solid" : "fa-regular") + " fa-circle featured-point"}
            onClick={() => scrollTo(temp)}
        />);
    }

    const setCurrOnMount = () => {
        document.documentElement.style.setProperty("--curr", 0);
    }

    useEffect(() => setCurrOnMount(), []);

    function scroll (direction) {
        var new_curr = currImage + direction;
        if (new_curr < 1 || new_curr > featured_images.length)
            return;
        scrollTo(new_curr);
    }
        
    return (<div className="featured-wrapper">
        <div className="image-container transform">
            {imageList}
        </div>
        <div className="scroll-container">
            <a className="prev" onClick={() => scroll(-1)}>&#10094;</a>
            {dotList}
            <a className="next" onClick={() => scroll(1)}>&#10095;</a>
        </div>
    </div>);

};

export default Featured;