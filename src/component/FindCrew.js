import React, { useState } from 'react'
import { NavLink, Switch, Route, useParams } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/findcrew.css'
import '../css/base.css'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHiking,
  faGolfBall,
  faBasketballBall,
  faRunning,
  faBiking,
  faFutbol,
  faTableTennis,
  faPlus,
  faBowlingBall
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faBasketballBall,
  faHiking,
  faGolfBall,
  faRunning,
  faBiking,
  faFutbol,
  faTableTennis,
  faPlus,
  faBowlingBall
  // more icons go here
)

function FindCrew () {
  return (
    <div class='center_body'>
      <NewComponent2 />
    </div>
  )
}

function NewComponent2 () {
  return (
    <div className='crewicon'>
      <table className='crewicon_table'>
        <tbody>
          <tr>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'golf-ball']} size='2x' />
                <i className="sportsname">골프</i>
              </a>
            </td>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'basketball-ball']} size='2x' />
                <i className="sportsname">농구</i>
              </a>
            </td>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'hiking']} size='2x' />
                <i className="sportsname">등산</i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'running']} size='2x' />
                <i className="sportsname">러닝</i>
              </a>
            </td>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'bowling-ball']} size='2x' />
                <i className="sportsname">볼링</i>
              </a>
            </td>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'biking']} size='2x' />
                <i className="sportsname">사이클</i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'futbol']} size='2x' />
                <i className="sportsname">축구</i>
              </a>
            </td>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'table-tennis']} size='2x' />
                <i className="sportsname">테니스</i>
              </a>
            </td>
            <td>
              <a href='/'>
                <FontAwesomeIcon icon={['fa', 'plus']} size='2x' />
                <i className="sportsname">기타</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FindCrew