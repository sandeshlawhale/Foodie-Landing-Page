import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <main>
        <div className="intro" id='home'>
            <h1>Your Favourite Food Delivered Hot & Fresh</h1>
            <p>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.</p>
            <button className="btn btn-primary">Order Now <span></span></button>
        </div>
        <div className="image">
            <img src="\assets\home-banner-image.png" alt="food profile" />
        </div>
        
        <img className='homebg' src="\assets\home-banner-background.png" />
    </main>
  )
}
