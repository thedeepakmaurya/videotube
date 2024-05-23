import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closedMenu } from '../utils/appSlice'

const WatchPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closedMenu())
    }, [])

    return (
        <div>WatchPage</div>
    )
}

export default WatchPage