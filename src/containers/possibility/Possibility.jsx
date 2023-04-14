import React from 'react'
import './possibility.css'
import Feature from '../../components/feature/Feature'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-feature">
        <div className="gpt3__possibility-feature-title">
          <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__possibility-feature_features">
          <Feature title="Improving end distrusts instantly " text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."/>
          <Feature title="Become the tended active" text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."/>
          <Feature title="Message or am nothing" text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."/>
          <Feature title="Really boy law county" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."/>
        </div>
      </div>
      <div className="gpt3__possibility-container">
        <img src={possibility} alt="Possibility" />
        <div className="gpt3__possibility-container-feature">
          <p1>Request Early Access to Get Started</p1>
          <Feature title="The possibilities are beyond your imagination" text="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "/>
          <p2>Request Early Access to Get Started</p2>
        </div>
      </div>
      <div className="gpt3__possibility-banner">
          <div className="gpt3__possibility-banner-text">
            <p>Request Early Access to Get Started</p>
            <h1>Register today & start exploring the endless possiblities.</h1>
          </div>
          <button>Get Started</button>
      </div>
    </div>
  )
}

export default Possibility