import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import MyPage from './MyPage'
import MainPage from './MainPage'
import FindCrew from './FindCrew'
import DetailInfo from './DetailInfo'

export default () => (
  <Router>
    <Route path='/login' component={Login} />
    <Route path='/mypage' component={MyPage} />
    <Route path='/' component={MainPage} />
    <Route path='/findcrew' component={FindCrew} />
    <Route path='/detailinfo' component={DetailInfo} />
  </Router>
)
