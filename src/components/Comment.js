import React from 'react'

const Comment = ({data}) => {

    const {name, text, replies}  = data;

  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg p-2 my-2'>
        <span className="material-symbols-outlined">account_circle</span>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment