import React from 'react'
import './article.css'

const Article = ({source, date, text}) => {
  return (
    <div className="gpt3__article">
      <img src={source} alt="Image" />
      <div className="gpt3__article-text">
        <p>{date}</p>
        <h1>{text}</h1>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article