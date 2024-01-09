import React from 'react'

export const WordDisplay = ({ wordSecret, scoreGame }) => {
  return (
    <div className='mt-10 flex w-full h-7 items-center gap-5'>
        <label htmlFor="" className='text-black'>PALABRA:</label>
        <p className='text-black'>{wordSecret}</p>
        <div className='flex ml-auto'>
            <label htmlFor="" className='text-black'>PUNTAJE:</label>
            <p className='ml-3 w-9 text-black'>{scoreGame}</p>
        </div>
    </div>
  )
}
