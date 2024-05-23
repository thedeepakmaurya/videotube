import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (<div className='flex'>
    <Sidebar />
    <Outlet/>
  </div>
  )
}

export default Body