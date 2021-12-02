import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img src="https://www.clipartmax.com/png/small/223-2230030_teenage-mutant-ninja-turtle-pizza-clip-art-clipart-teenage-mutant-ninja-turtles.png" alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          ninja turtle fan
        </a>
        <div className="metadata">
          <span className="date">Today at 6pm</span>
        </div>
        <div className="text">My first react app!</div>
      </div>
    </div>
  </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'))