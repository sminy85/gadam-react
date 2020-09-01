import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from './MainPage'
import FindCrew from './FindCrew'

export default () => (
  <Router>
    <Route path='/' component={MainPage} />
    <Route path='/findcrew' component={FindCrew} />
  </Router>
)
