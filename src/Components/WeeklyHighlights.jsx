import React from 'react'

function WeeklyHighlights({dailyData:{Text}}) {
  return (
    <div className='  p-2 rounded-xl flex flex-col justify-around shadow shadow-slate-900
          bg-slate-600 bg-opacity-45 border-2 border-slate-700 w-full' >
          <p className='ml-4 text-xl text-white'>Weekly Highlight </p>
          <hr className='w-11/12 ml-4 my-2' />
          <p className='ml-4 text-lg text-gray-300'>{Text}</p>
        </div>
  )
}

export default WeeklyHighlights;