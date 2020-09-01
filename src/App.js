import React from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Routes from './component/Routes'

import { BrowserRouter} from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
      <Header />
        <Routes/>
        {/* 
        <div class='main_control_btn'>
          <NavLink className='main_control' exact to="/" href="/">HOME</NavLink>
          <NavLink className='main_control' to="/findcrew">FIND CREW</NavLink>
        </div>
        <Switch>
          <Route exact path="/"><MainPage></MainPage></Route>
          <Route path="/findcrew"><FindCrew></FindCrew></Route>
        </Switch> */}

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
