import React from 'react'

const ChatMessage = ({name, message}) => {
    console.log(message)
    return (
        <div className='flex items-center shadow-sm p-2 '>
            <span className="material-symbols-outlined">person</span>
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage