import React from 'react'
import '../css/ect_crew.css'
import '../css/base.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
faSearch
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faSearch
  )



function EctCrew () {
  return (
    <div>
      <b><li><NavLink to='/addsports' className="go-addsport">+</NavLink></li></b>
      <div className='center_body6'>
        {/*크루리스트창 시작*/}
        <section className="crewlist">
          <div className="addsports-top">
            <h1 className="findcrew-title">더 많은 크루를 찾고 계신가요? </h1>
          </div>
          <div className="findcrew-m">
            <input className='findcrew_input' type='text'  />
            <button className="findcrew_btn_m"><FontAwesomeIcon icon={['fa', 'search']} size='2x' /></button>
          </div>
          <div className="crewicon">
            <table className="crewicon_table">
              <tbody>
                <tr>
                  <td>
                   <NavLink to='/crewlist' className="sportsname-ect" >골프</NavLink></td>
                      {/*<a><p className="sportsname-ect">골프</p></a></td> */}
                  <td><a>
                      <p className="sportsname-ect">농구</p></a></td>  
                  <td><a>
                      <p className="sportsname-ect">등산</p></a></td>    
                </tr>
                <tr>
                  <td><a>
                      <p className="sportsname-ect">러닝</p></a></td>
                  <td><a>
                      <p className="sportsname-ect">사이클</p></a></td>
                  <td><a>
                      <p className="sportsname-ect">축구</p></a></td>
                </tr>
                <tr>
                  <td><a>
                      <p className="sportsname-ect">클라이밍</p></a></td>
                  <td><a>
                      <p className="sportsname-ect">테니스</p></a></td>
                </tr>
              </tbody>
            </table> 
          </div>  
        </section></div>
    </div>
  )
}
export default EctCrew;
