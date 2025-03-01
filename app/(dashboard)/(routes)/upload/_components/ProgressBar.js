import React from 'react'

function ProgressBar({progress = 0}) {
  return (
    <div className='bg-gray-400 w-full h-4 mt-3 rounded-full'>
        <div className='p-1 bg-primary rounded-full h-4 text-[10px] text-white items-center' style={{width:`${progress}%`}}>
        </div>
            {`${Number(progress).toFixed(0)}%`}
    </div>
  )
}

export default ProgressBar