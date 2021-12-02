import React from 'react'

const Blogpost = (props) => {
  return <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          <span>{props.name}</span>
        </a>
        <div className="metadata">
          <span className="date">{props.day}</span>
        </div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  </div>
}

export default Blogpost