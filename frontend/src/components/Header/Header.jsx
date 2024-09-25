import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div className=' head bg-lime-500'>
      <img src={assets.header_img} alt="" />
      <div className='text-pic'>
      <h1 className='order'>Order your </h1>
      <h1 className='food'>faverite food here</h1>
      <p className='lorem w-96 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur omnis voluptatum? A facere maxime fuga impedit repudiandae accusamus, dignissimos perferendis soluta dolor.</p>
      <button className='view-btn'>View Menu</button>
      </div>
    </div>
  )
}

export default Header