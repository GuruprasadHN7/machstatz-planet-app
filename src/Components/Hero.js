import React from 'react';
import img1 from '../images/img2.jpg';
import './Hero.css';
const Hero = () => {
    return(
        <section className="hero-container">
            <div className="text-container">
                <h1>Lets Explore the planets of the Universe</h1>
            </div>
            <div className="image-container">
                <img src={img1} alt="" />
            </div>
        </section>
    )
}
export default Hero;