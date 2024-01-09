import React from 'react'

export const HangmanImage = ({ imagesHangman, position }) => {

  return (
    <div id="hangman" className="flex py-4 px-14">
        <img className='w-52' src={imagesHangman[position]}/>
    </div>
  )
}
