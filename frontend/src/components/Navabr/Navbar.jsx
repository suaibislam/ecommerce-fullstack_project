import React,{useState} from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setLogin}) => {
  const [menu, setmenu] = useState('home')
  return (
    <nav className='nav'>
      <div className=' cursor-pointer'>
           <Link to="/"><img src={assets.logo} alt="" /></Link>
      </div>
      <div>
          <ul className='ul-li'>
           <Link to="/"> <li onClick={()=>setmenu('home')} className={menu==='home'?'active':''}><a >Home</a></li></Link>
            <a href='#explore-menu' onClick={()=>setmenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#app-download' onClick={()=>setmenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu('contact')} className={menu==='contact'?'active':''}>Contact-us</a>
          </ul>
      </div>
      <div className='icon-sign'>
          <img src={assets.search_icon} alt="" className='img1' />
         <Link to="/cart"> <img src={assets.basket_icon} alt="" className='img2'/>  </Link>
          <div className="dot"></div>
          <div onClick={()=>setLogin(true)} className=' sign'>Sign in</div>
      </div>
    </nav>
  )
}

export default Navbar