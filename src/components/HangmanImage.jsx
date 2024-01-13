import React from 'react'

export const HangmanImage = ({ imagesHangman, position }) => {

  return (
    <div id="hangman" className="flex justify-center sm:justify-start py-4 px-14">
        <img className='w-44 sm:w-52' src={imagesHangman[position]}/>
    </div>
  )
}
