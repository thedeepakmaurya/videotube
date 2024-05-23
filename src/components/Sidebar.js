import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen = useSelector((store )=> store.app.isMenuOpen)

  if (!isMenuOpen) {
    return null
  }

  return (
    <div className='p-5 shadow-lg  min-w-48 h-screen '>
      <ul>
        <li><span className="material-symbols-outlined align-middle pr-2">home</span> Home</li>
        <li><span className="material-symbols-outlined align-middle pr-2">movie</span>Shorts</li>
        <li><span className="material-symbols-outlined align-middle pr-2">play_circle</span>Videos</li>
        <li><span className="material-symbols-outlined align-middle pr-2">videocam</span>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li><span className="material-symbols-outlined align-middle pr-2">music_note</span>Music</li>
        <li><span className="material-symbols-outlined align-middle pr-2">sports_martial_arts</span>Sports</li>
        <li><span className="material-symbols-outlined align-middle pr-2">sports_esports</span>Gaming</li>
        <li><span className="material-symbols-outlined align-middle pr-2">hd</span>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li><span className="material-symbols-outlined align-middle pr-2">tv_options_edit_channels</span>Your Channel</li>
        <li><span className="material-symbols-outlined align-middle pr-2">history</span>History</li>
        <li><span className="material-symbols-outlined align-middle pr-2">playlist_play</span>Playlist</li>
        <li><span className="material-symbols-outlined align-middle pr-2">thumb_up</span>Liked Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar;