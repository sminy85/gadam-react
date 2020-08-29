import React from 'react'
import { NavLink, Switch, Route, useParams } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/style.css'
import '../css/base.css'

function Home () {
  return (
    <div class='center_body'>
      <NewComponent />
      <hr />
    </div>
  )
}

function NewComponent () {
  return (
    <div>
      <div>
        {/*hotcrew_image
        <section className='slider'>
          <div className='flexslider'>
            <ul className='slides'>
              <li>
                <a href='/'>
                  <img src='images/blog-1.jpg' width='10%' height='10%' />
                </a>
              </li>
              <li>
                <img src='images/blog-4.jpg' />
              </li>
              <li>
                <img src='images/blog-6.jpg' />
              </li>
            </ul>
          </div>
        </section>
        {/*todays_crew*/}
        <div className="todays-crew">
          <div className="todays-crew-nav">
            <span>오늘의 크루</span>
            <span className="filter_btn" id="filter_btn">
              <a href='/' className="fas fa-filter"><FontAwesome name='filter' size='2x' /></a>
            </span>
          </div>
          {/* 팝업 될 레이어 
          <div className="modal"> 
            <div className="modal-content"> 
              카테고리
              <span className="close-button">×</span>
              <div className="filter_item">
                <ul className="list">
                  <h4 className="sex_filter">성별</h4>
                  <li>
                    <input type="checkbox" v-model="checkedSex" className="filterCheck grey" id="sex_m" defaultValue={1} />
                    <label htmlFor="sex_m" className="checkLabel">남성</label>
                  </li>
                  <li>
                    <input type="checkbox" v-model="checkedSex" className="filterCheck grey" id="sex_w" defaultValue={-1} />
                    <label htmlFor="sex_w" className="checkLabel">여성</label>
                  </li>
                  <li>
                    <input type="checkbox" v-model="checkedSex" className="filterCheck grey" id="sex_u" defaultValue={0} />
                    <label htmlFor="sex_u" className="checkLabel">무관</label>
                  </li>
                </ul>
                <ul className="list">
                  <h4 className="age_filter">나이</h4>
                  <li>
                    <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={4} />
                    <label htmlFor="type_match" className="checkLabel">10대</label>
                  </li>
                  <li>
                    <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={5} />
                    <label htmlFor="type_cup" className="checkLabel">20대</label>
                  </li>
                  <li>
                    <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={6} />
                    <label htmlFor="type_cup" className="checkLabel">30대</label>
                  </li>
                  <li>
                    <input type="checkbox" v-model="checkedAge" className="filterCheck grey" id="type_match" defaultValue={7} />
                    <label htmlFor="type_cup" className="checkLabel">40대</label>
                  </li>

                </ul>
              </div>
              <input type="button" id="cancel" defaultValue="취소" />
              <input type="submit" id="submit" defaultValue="적용하기" />
            </div>
          </div>
          */}
          <hr />
          <div className="time-filter">
            <ul className="time-filter-btn">
              <li><a href='/'>전체</a></li>
              <li><a href='/'>7:00</a></li>
              <li><a href='/'>8:00</a></li>
              <li><a href='/'>9:00</a></li>
              <li><a href='/'>10:00</a></li>
              <li><a href='/'>11:00</a></li>
              <li><a href='/'>12:00</a></li>
              <li><a href='/'>13:00</a></li>
              <li><a href='/'>14:00</a></li>
              <li><a href='/'>15:00</a></li>
              <li><a href='/'>16:00</a></li>
              <li><a href='/'>17:00</a></li>
              <li><a href='/'>18:00</a></li>
              <li><a href='/'>19:00</a></li>
              <li><a href='/'>20:00</a></li>
              <li><a href='/'>21:00</a></li>
              <li><a href='/'>22:00</a></li>
            </ul>
          </div>
          <hr />
          <div className="region-filter">
            <ul className="region-filter-btn">
              <li>
                <a href='/'>전체</a>
              </li>
              <li>
                <a href='/'>서울</a>
              </li>
              <li>
                <a href='/'>경기</a>
              </li>
              <li>
                <a href='/'>인천</a>
              </li>
              <li>
                <a href='/'>대전</a>
              </li>
              <li>
                <a href='/'>충북</a>
              </li>
              <li>
                <a href='/'>광주</a>
              </li>
              <li>
                <a href='/'>대구</a>
              </li>
              <li>
                <a href='/'>울산</a>
              </li>
              <li>
                <a href='/'>부산</a>
              </li>
            </ul>
            <hr />
            <ul>
              <div className="todays-crew-info">
                <li className="time"> 9:00 </li>
                <div className="info">
                  <span className="title">등산 크루</span>
                  <span className="hashtags">
                    <li>#여자</li>
                    <li>#등산</li>
                    <li>#서울</li>
                  </span>
                </div>
                <a href='/' className="joinbtn">참여하기</a>
              </div>
              <div className="todays-crew-info">
                <li className="time"> 11:00 </li>
                <div className="info">
                  <span className="title">러닝 크루</span>
                  <span className="hashtags">
                    <li>#남자</li>
                    <li>#오전</li>
                    <li>#서울</li>
                  </span>
                </div>
                <a className="joinbtn" href='/'>참여하기</a> 
              </div>
              <div className="todays-crew-info">
                <li className="time"> 15:00 </li>
                <div className="info">
                  <span className="title">사이클 크루</span>
                  <span className="hashtags">
                    <li>#무관</li>
                    <li>#사이클</li>
                    <li>#서울</li>
                  </span>
                </div>
                <a className="joindonebtn" href='/'>모집마감</a>
              </div>
              <div className="todays-crew-info">
                <li className="time"> 17:00 </li>
                <div className="info">
                  <span className="title">한강러닝 크루</span>
                  <span className="hashtags">
                    <li>#남자</li>
                    <li>#러닝</li>
                    <li>#대전</li>
                  </span>
                </div>
                <a className="joinfastbtn" href='/'>마감임박</a>
              </div>
              <div className="todays-crew-info">
                <li className="time"> 18:00 </li>
                <div className="info">
                  <span className="title">탁구 크루</span>
                  <span className="hashtags">
                    <li>#무관</li>
                    <li>#탁구</li>
                    <li>#대전</li>
                  </span>
                </div>
                <a className="joinbtn" href='/'>참여하기</a>
              </div>
              <div className="todays-crew-info">
                <li className="time"> 19:00 </li>
                <div className="info">
                  <span className="title">배드민턴크루</span>
                  <span className="hashtags">
                    <li>#남자</li>
                    <li>#오후</li>
                    <li>#부산</li>
                  </span>
                </div>
                <a className="joinbtn" href='/'>참여하기</a>
              </div>
              <div className="todays-crew-info">
                <li className="time"> 20:00 </li>
                <div className="info">
                  <span className="title">탁구 크루</span>
                  <span className="hashtags">
                    <li>#무관</li>
                    <li>#탁구</li>
                    <li>#부천</li>
                  </span>
                </div>
                <a className="joindonebtn" href='/'>모집마감</a>
              </div>
              <div className="todays-crew-info">
                <li className="time"> 22:00 </li>
                <div className="info">
                  <span className="title">밤수영 크루</span>
                  <span className="hashtags">
                    <li>#남자</li>
                    <li>#수영</li>
                    <li>#인천</li>
                  </span>
                </div>
                <a className="joinfastbtn" href='/'>마감임박</a>
              </div>
            </ul>
          </div>
        </div>
        <div className="stickybutton" style={{zIndex: 2}}>
          <a href='/'>
            <p><b>크루모집</b></p>
            <span className="mainjoin" href='/'>나만의 크루를 모집해보세요!</span>
          </a>
        </div>
        <div className="main-paging">
          <div className="todayscrew-paging">
            <a className="prev" href='/'>&lt;</a>
            <a href='/' className="checknum">1</a>
            <a href='/'>2</a>
            <a href='/'>3</a>
            <a href='/'>4</a>
            <a href='/'>5</a>
            <a className='next' href='/'>&gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainPage () {
  return (
    <div class='mainpage'>
      <div class="main">
        <div class="main_control_btn">
          <NavLink exact to="/" href="/">HOME</NavLink>
          <NavLink to="/findcrew">FIND CREW</NavLink>
        </div>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/">Not found</Route>
        </Switch>
      </div>
    </div>
  )
}

export default MainPage