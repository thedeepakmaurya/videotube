import React from 'react';
import logo from '../assets/youtube-logo.png';

const Head = () => {
    return (
        <div className='grid grid-flow-col h-12 p-1 m-1 shadow-md items-center'>
            <div className='flex col-span-1'>
                <span class="material-symbols-outlined">menu</span>
                <img className='h-6' src={logo} alt='youtube-logo' />
            </div>
            <div className='flex col-span-10 justify-center h-8'>
                <input className='w-1/2 border border-gray-400 outline-none rounded-l-full' type='text' />
                <button className='border border-l-0 bg-gray-100 border-gray-400 rounded-r-full pt-1 pb-1 pl-3 pr-3 items-center ' ><span class="material-symbols-outlined">search</span></button>
            </div>
            <div className='flex col-span-1 justify-end'>
                <span class="material-symbols-outlined">account_circle</span>
            </div>
        </div>
    )
}

export default Head