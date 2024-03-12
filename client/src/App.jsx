import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Blogpost from './components/Blogpost'
import TheForgotenOnes from './components/MeetTeam'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Blogpost/>
    <TheForgotenOnes/>
    <Home/>
    <NotFound/>
    </>
    )
  }
export default App

