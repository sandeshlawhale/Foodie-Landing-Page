import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id='contact'>
        <h1>Have Question In Mind? Let Us Help You</h1>
        <div className='contact-email'>
            <input type="email" placeholder='XYZ@gmail.com' required/>
            <button>Submit</button>
        </div>
    </section>
  )
}
