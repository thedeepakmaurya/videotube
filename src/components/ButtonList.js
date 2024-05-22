import React from 'react'

const ButtonList = () => {

  const List = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentines", "Football"]

  return (
    <div>
      {List.map((name) => <button className='px-4 py-1 m-4 bg-gray-200 rounded-md'>{name}</button>)}
    </div>
  )
}

export default ButtonList;