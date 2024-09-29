import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div className=' head '>
      <img src={assets.header_img} alt="" />
      <div className='text-pic'>
      <h1 className='order leading-normal'>Order your </h1>
      <h1 className='food text-xl text-white leading-normal'>faverite food here</h1>
      <p className='lorem text-justify'>Lorem ipsum  adipisicing elit. Ut tenetur repudiandae accusamus, dignissimos perferendis soluta dolor.</p>
      <button className='view-btn'>View Menu</button>
      </div>
    </div>
  )
}

export default Header