import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import TheForgotenOnes from './components/MeetTeam'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
    <Navbar/>
    <TheForgotenOnes/>
    <Home/>
    <NotFound/>
    </>
    )
  }
export default App

