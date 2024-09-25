import React,{useState} from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets'

const Navbar = ({setLogin}) => {
  const [menu, setmenu] = useState('home')
  return (
    <nav className='nav'>
      <div>
           <img src={assets.logo} alt="" />
      </div>
      <div>
          <ul className='ul-li'>
            <li onClick={()=>setmenu('home')} className={menu==='home'?'active':''}><a  >Home</a></li>
            <li onClick={()=>setmenu('menu')} className={menu==='menu'?'active':''}><a >Menu</a></li>
            <li onClick={()=>setmenu('mobile-app')} className={menu==='mobile-app'?'active':''}><a >Mobile-app</a></li>
            <li onClick={()=>setmenu('contact')} className={menu==='contact'?'active':''}><a >Contact-us</a></li>
          </ul>
      </div>
      <div className='icon-sign'>
          <img src={assets.search_icon} alt="" className='img1' />
          <img src={assets.basket_icon} alt="" className='img2'/>
          <div className="dot"></div>
          <div onClick={()=>setLogin(true)} className=' sign'>Sign in</div>
      </div>
    </nav>
  )
}

export default Navbar