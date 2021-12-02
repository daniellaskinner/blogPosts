import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'

const App = () => {
  return <div>
    <h1 className="First header">CodeBlog</h1>
    <Blog/>
  </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'))
