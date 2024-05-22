import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Main = () => {
    return (<div className='flex flex-col  overflow-scroll'>
        <ButtonList />
        <VideoContainer />
    </div>
    )
}

export default Main