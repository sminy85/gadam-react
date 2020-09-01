import React from 'react'
import '../css/style.css'

function MainNav () {
  return (
    <div className='mainpage'>
      <div className="main">
        <div className="main_control">
          <div className="main_control_btn">
            <a className="selected" href="/">HOME</a>
            <a>FIND CREW</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
