import React from 'react'
import './Testimonial.css'
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const cards = [
    {
        "id": 1,
        "src": "/assets/john-doe-image.png",
        "body": "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.",
        "review": 5,
        "name": "John Doe"
    },
    {
        "id": 2,
        "src": "/assets/john-doe-image.png",
        "body": "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.",
        "review": 5,
        "name": "John Doe"
    },
    {
        "id": 3,
        "src": "/assets/john-doe-image.png",
        "body": "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.",
        "review": 5,
        "name": "John Doe"
    }
]

export default function Testimonial() {
  return (
    <section className='testimonial' id='testimonials'>
        <div className="testimonial-wrapper">    
            <div className="testimonial-info">
                <h5>Testimonial</h5>
                <h1>What They Are Saying</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
            </div>
            <div className="carasole">
                <Swiper 
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {cards.map(({src, body, review, name, id}) => {
                    return <SwiperSlide key={id}>
                                <img src={src} />
                                <p>{body}</p>
                                <h5>{name}</h5>
                            </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}
