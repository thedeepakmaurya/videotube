import React from 'react'

const ButtonList = () => {

  const List = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentines", "Football", "Action", "Drama", "Blogger"]

  return (
    <div className='overflow-x-auto whitespace-nowrap'>
      {List.map((name, index) => <button key={index} className='px-4 py-1 m-2 bg-gray-200 rounded-md'>{name}</button>)}
    </div>
  )
}

export default ButtonList;