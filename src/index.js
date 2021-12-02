import React from 'react'
import ReactDOM from 'react-dom'
import Blogposts from './blogposts'

const App = () => {
  return <div>
    <h1 className="First header">CodeBlog</h1>
    <Blogposts/>
  </div>
}

ReactDOM.render(<App/>, document.querySelector('#root')) 