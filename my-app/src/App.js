

// default junk 


import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Scoring from "./Pages/Scoring"

import Putter from "./Pages/Putter"
import MidRange from "./Pages/MidRange"
import Driver from "./Pages/Driver"

import Backhand from "./Pages/Backhand"
import Forehand from "./Pages/Forehand"
import Tomahawk from "./Pages/Tomahawk"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage />}></Route>
        <Route path='/Scoring' element={ <Scoring />}></Route>
        <Route path='/Putter' element={ <Putter />}></Route>
        <Route path='/MidRange' element={ <MidRange />}></Route>
        <Route path='/Driver' element={ <Driver />}></Route>
        <Route path='/Forehand' element={ <Forehand />}></Route>
        <Route path='/Backhand' element={ <Backhand />}></Route>
        <Route path='/Tomahawk' element={ <Tomahawk />}></Route>
      </Routes>
    </div>
  )
}

export default App;