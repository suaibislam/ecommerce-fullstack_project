import React,{useState} from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

import { AiOutlineMenuFold } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = ({setLogin}) => {
  const [menu, setmenu] = useState('home')
  const [navbtn, setnavbtn] = useState(false)

// className='nav nav-mobile'
// className={`job-btn ${index === value && 'active-btn'}`}
  return (
    <nav className= {`nav ${navbtn?'nav-mobile':''}`}>
      {
       navbtn? <div className=' cursor-pointer'>
       <Link to="/"><img className='img-tom' src={assets.logo} alt="" /></Link>
       <div onClick={()=>setnavbtn(false)} className=' font-bold text-3xl'><ImCross/></div>  </div> : <div className=' cursor-pointer'>
       <Link to="/"><img className='img-tom' src={assets.logo} alt="" /></Link>
       <div onClick={()=>setnavbtn(true)} className=' btn-menu font-bold text-3xl'><AiOutlineMenuFold/></div>
       
  </div>
      }
      
      <div className={`menu-ul  ${navbtn? 'ul-li1' : '' }`}>
          <ul className='ul-li'>
           <Link to="/"> <li onClick={()=>{setmenu('home');setnavbtn(false)}} className={menu==='home'?'active':''}><a >Home</a></li></Link>
            <a href='#explore-menu'  onClick={()=>{setmenu('menu');setnavbtn(false) }} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#app-download' onClick={()=>{setmenu('mobile-app');setnavbtn(false)}} className={menu==='mobile-app'?'active':''}>Mobile-app</a>
            <a href='#footer' onClick={()=>{setmenu('contact');setnavbtn(false)}} className={menu==='contact'?'active':''}>Contact-us</a>
          </ul>
      </div>
      <div className={`icon-sign  ${navbtn? 'icon-sign1' : '' }`}>
          <img src={assets.search_icon} alt="" className='img1' />
         <Link to="/cart"> <img onClick={()=>setnavbtn(false)} src={assets.basket_icon} alt="" className='img2'/>  </Link>
          <div className="dot"></div>
          <div onClick={()=>setLogin(true)} className=' sign'>Sign in</div>
      </div>
    </nav>
  )
}

export default Navbar