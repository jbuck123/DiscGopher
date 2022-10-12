

// default junk 

import * as React from 'react';
import { useEffect, useState } from 'react'


import Logout from './utils/Logout';

import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"

import HomePage from "./Pages/HomePage"
import Scoring from "./Pages/Scoring"

import Putter from "./Pages/Putter"
import MidRange from "./Pages/MidRange"
import Driver from "./Pages/Driver"

import Backhand from "./Pages/Backhand"
import Forehand from "./Pages/Forehand"
import Tomahawk from "./Pages/Tomahawk"



function App() {
const [ user, setUser ] = useState(null)

const isLoggedIn = ( ) => {
  return fetch ("/profile").then((res) => res.json()).then((data) => setUser(data))
}
useEffect(() => {
isLoggedIn();
 
}, [])
  return (
    <div>
      <Header user = { user }  />
      <Routes>
        <Route path='/' element={ <HomePage />}></Route>
        <Route path='/Scoring' element={ <Scoring />}></Route>
        <Route path='/Putter' element={ <Putter />}></Route>
        <Route path='/MidRange' element={ <MidRange />}></Route>
        <Route path='/Driver' element={ <Driver />}></Route>
        <Route path='/Forehand' element={ <Forehand />}></Route>
        <Route path='/Backhand' element={ <Backhand />}></Route>
        <Route path='/Tomahawk' element={ <Tomahawk />}></Route>
        <Route path='/Login' element={ <Login />}></Route>
        <Route path='/Register' element={ <Register />}></Route>
        <Route path='/Logout' element={ <Logout />}></Route>
        <Route path= '/Profile' element={ <Profile /> }></Route>
      </Routes>
    </div>
  )
}

export default App;