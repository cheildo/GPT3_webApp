import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const header = () => {
  return (
    <div>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p className="gpt3__header-content__text">GPT-3 is a natural language processing system that can generate text, code, and images. It is the third-generation language model from OpenAI, a San Francisco-based artificial intelligence research company.</p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your email address" />
            <button type="button" className="btn btn__primary">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src= {people} alt="people"/>
            <p>1,652 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="gpt3__header-image">
            <img src= {ai} alt="ai"/>
        </div>
      </div>
    </div>
  )
}

export default header