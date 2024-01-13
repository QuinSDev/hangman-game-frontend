import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bgWindowImage from '../assets/images/windows-xp-bliss-wallpaper-preview-min.jpg'
import { Window } from '../components/Window'
import { Game } from './Game';

export const Home = () => {
const bgWindow = {
    backgroundImage: `url(${bgWindowImage})`,
    backgroundSize: 'cover',
}


  return (
    <div className='h-[93vh] sm:h-[100vh] flex p-4 sm:p-10 items-center justify-center' style={bgWindow}>
      <Router>
        <Routes>
          <Route path='/' element={<Window />}/>
          <Route path='juego-nuevo' element={<Game />}/>
        </Routes>
      </Router>
    </div>
  )
}
