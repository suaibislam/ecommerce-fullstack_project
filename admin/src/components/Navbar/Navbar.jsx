import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' nav p-2'>
        <div className='ml-10 '>
          <Link to="/"> <img className='h-12' src={assets.logo} alt="" /></Link> 
           
        </div>
        <div className='mr-10'>
            <img src={assets.profile_image} alt="" />
        </div>
    </nav>
  )
}

export default Navbar