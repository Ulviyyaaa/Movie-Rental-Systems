import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Footer() {
  return (
    <div className='mainFoo'>
      <div id='container'>
        <div className='fooBox'>
          <Link to={"/"}><h1>blau.</h1></Link>
        </div>
        <div className='autor'>
          <p>by Ulviyya</p>
        </div>
      </div>
    </div>
  )
}

export default Footer