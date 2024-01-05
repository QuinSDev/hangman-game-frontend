import React from 'react'
import bgWindowImage from '../assets/images/windows-xp-bliss-wallpaper-preview-min.jpg'
import { Window } from '../assets/components/Window'

export const Home = () => {
const bgWindow = {
    backgroundImage: `url(${bgWindowImage})`,
    backgroundSize: 'cover',
}


  return (
    <div className='h-[100vh] flex p-10 items-center justify-center' style={bgWindow}>
        <Window />
    </div>
  )
}
