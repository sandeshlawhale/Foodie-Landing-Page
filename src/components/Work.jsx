import React from 'react'
import './Work.css'

const cards = [
    {
        "id": 1,
        "src": "pick-meals-image.png",
        "title": "Pick Meals",
        "body": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
    },
    {
        "id": 2,
        "src": "choose-image.png",
        "title": "Pick Meals",
        "body": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
    },
    {
        "id": 3,
        "src": "delivery-image.png",
        "title": "Pick Meals",
        "body": "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
    }
]

export default function Work() {
  return (
    <section className='work' id='work'>
        <div className="work-wrapper">
            <div className="work-info">
                <h5>Work</h5>
                <h1>How It Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
            </div>
            <div className="work-cards">
                {cards.map(({id, src, title, body}) => {
                    return (
                        <div className="card" key={id}>
                            <img src={`/assets/${src}`} />
                            <h1>{title}</h1>
                            <p>{body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
