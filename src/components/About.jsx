import React from 'react'
import './About.css'
import { FaPlayCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className='about' id='about'>
        <img src="\assets\about-background.png" className='about-bg'/>
        <div className="about-img">
            <img src="\assets\about-background-image.png"/>
        </div>
        <div className="about-info">
            <h5>About</h5>
            <h1>Food Is An Important Part Of A Balanced Diet</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
            <p>Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
            <div className="about-btn">
                <button className="btn btn-primary">Learn More</button>
                <a href="" className="about-vid">
                    <div className="vid-icon"><FaPlayCircle style={{height: "100%", width: "100%"}} /></div>
                    <p>Watch Video</p>
                </a>
            </div>
        </div>
    </section>
  )
}
