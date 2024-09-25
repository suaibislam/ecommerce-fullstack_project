import React from 'react'
import './AppDownload.css';
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className=' mt-20 mb-16 flex justify-center items-center flex-col'>
        <div className=' text-center mb-5'>
        <h1 className=' text-2xl'>For Better Experience Download</h1>
        <h2 className=' font-bold' >Tomato App</h2>
        </div>
        <div className=' flex flex-row gap-4'>
            <img className='h-10' src={assets.play_store} alt="" />
            <img className='h-10' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload