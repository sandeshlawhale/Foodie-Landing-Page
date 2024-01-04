import React from 'react'
import './Footer.css'
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebookF  } from "react-icons/fa";
import Testimonial from './Testimonial';

const links = {
    "nav": ["Quality", "Help", "Share", "Carrers", "Works", "Testimonial"],
    "contacts": ["244-5333-7783", "hello@gmail.com", "press@gmail.com", "contact@food.com"],
    "terms": ["Terms & Conditions", "Privacy Policy"]
}


export default function Footer() {
  return (
    <footer>
        <div className='left'>
            <img src="\assets\Logo.svg"/>
            <ul className="socials">
                <li><a href=""><FaTwitter style={{height: "100%", width: "100%"}} /> </a> </li>
                <li><a href=""><FaLinkedin style={{height: "100%", width: "100%"}} /> </a> </li>
                <li><a href=""><FaYoutube style={{height: "100%", width: "100%"}} /> </a> </li>
                <li><a href=""><FaFacebookF style={{height: "100%", width: "100%"}} /> </a> </li>
            </ul>
        </div>
        <div className="right">
            <ul className="column">
                {links.nav.map((nav) => {
                    return <li><a href={nav}>{nav}</a></li>
                })}
            </ul>
            <ul className="column">
                {links.contacts.map((contact) => {
                    return <li><a href="">{contact}</a></li>
                })}
            </ul>
            <ul className="column">
                {links.terms.map((term) => {
                    return <li><a href="">{term}</a></li>
                })}
            </ul>
        </div>
    </footer>
  )
}
