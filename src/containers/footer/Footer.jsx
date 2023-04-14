import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <h1>Do you want to step in to the<br/> future before others</h1>
      <div className="gpt3__footer-request">
        <p><a href="">Request Early Access</a></p>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container-logo">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-container-links">
          <div className="gpt3__footer-container-links-one">
            <h4>Links</h4>
            <p> <a href="">Overons</a></p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-container-links-two">
            <h4>Links</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-container-links-three">
          <h4>Links</h4>
            <p>Crechterwoord K12<br/>182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>Counters</p>
            <p>info@payme.net</p>
          </div>  
          
        </div>
      </div>
      <p1>© 2021 GPT-3. All rights reserved.</p1>
    </div>
  )
}

export default footer