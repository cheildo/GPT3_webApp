import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import {blog1, blog2, blog3, blog4, blog5 } from './import'

const blog = () => {
  return (
    <div className="gpt3__blog">
      <div className="gpt3__blog-heading">
        <h1>A lot is happening,<br/>We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-left">
          <Article source={blog1} date="Apr 13, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container-right">
        <Article source={blog2} date="Apr 11, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article source={blog3} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article source={blog4} date="Sep 28, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article source={blog5} date="Jan 26, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default blog