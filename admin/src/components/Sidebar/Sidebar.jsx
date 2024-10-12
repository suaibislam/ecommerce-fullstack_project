import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
        <div className='aside-div mt-12 flex flex-row gap-1  items-center' >
           <Link to="/add"></Link>
            <img className='h-6 ml-1' src={assets.add_icon} alt="" />
            <p><Link to="/add">Add items</Link></p>
            
        </div>
        <div className='aside-div flex flex-row gap-1  items-center'>
            <img className='h-5  ml-1' src={assets.order_icon} alt="" />
            <p><Link to="/list">List items</Link></p>
        </div>
        <div className='aside-div flex flex-row gap-1 items-center'>
        <img className='h-5  ml-1' src={assets.order_icon} alt="" />
         <p><Link to="/orders">Orders</Link></p>
        </div>
    </aside>
  )
}

export default Sidebar;