import React from 'react';
import logo from '../assets/youtube-logo.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();

const toggleMenuHandler = () =>{
      dispatch(toggleMenu())
}

    return (
        <div className='grid grid-flow-col h-12 p-1 m-1 shadow-md items-center'>
            <div className='flex col-span-1'>
                <div className='cursor-pointer' onClick={() => toggleMenuHandler()}><span className="material-symbols-outlined">menu</span></div>
                <img className='h-6' src={logo} alt='youtube-logo' />
            </div>
            <div className='flex col-span-10 justify-center h-8'>
                <input className='w-1/2 border border-gray-400 outline-none rounded-l-full' type='text' />
                <button className='border border-l-0 bg-gray-100 border-gray-400 rounded-r-full pl-3 pr-3' ><span className="material-symbols-outlined align-middle">search</span></button>
            </div>
            <div className='flex col-span-1 justify-end'>
                <span className="material-symbols-outlined">account_circle</span>
            </div>
        </div>
    )
}

export default Head;