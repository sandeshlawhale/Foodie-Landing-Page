import React, { useState } from 'react'
import './nav.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    "home",
    "about",
    "testimonials",
    "contact"
]

export default function Nav() {

    const [isActive, setIsActive] = useState(false)

  return (
    <nav>
        <div className="logo">
            <img src="\assets\Logo.svg" alt="" />
        </div>
        <div className="navlinks">
            {links.map((link, i) => {
                return <div key={i} className='navlink'><a href={`#${link}`}>{link}</a></div>
            })}
            <div className='cartlogo'><MdOutlineShoppingCart style={{height: '100%', width: '100%' }} /></div>            
            <button className='btn'>booking now</button>
        </div>
        <div className="hamicon" onClick={() => setIsActive(true)}>
            <GiHamburgerMenu style={{height: "100%", width: "100%"}} />
        </div>

        <AnimatePresence>
            {isActive && 
                <motion.div 
                    className='sidebar'
                    initial={{x: 280}}
                    animate={{x: 0}}
                    exit={{x: 280}}
                    transition={{duration: 0.3, when: 'beforeChildren', staggerChildren: 0.2}}
                >
                    <div className="closeicon" onClick={() => setIsActive(false)}>
                        <IoMdClose style={{height: "35px", width: "35px"}} />
                    </div>
                    <div className="sidebar-links">
                        {links.map((link, i) => {
                            return <div key={i} className='navlink'>{link}</div>
                        })}
                        <div className='cartlogo'><MdOutlineShoppingCart style={{height: '100%', width: '100%' }} /></div>            
                        <button className='btn'>booking now</button>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        
        

    </nav>
  )
}
