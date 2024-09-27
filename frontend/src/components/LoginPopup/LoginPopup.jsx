import React, { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setLogin}) => {
  const [currentState, setcurrentState] = useState("Sign Up");

  return (
    <div className= ' login  flex justify-center items-center  z-10  '>
      <div className=' p-5 bg-white rounded-md'>
        <div className='mb-6 cursor-pointer flex justify-between  items-center'>
          <h1 className=' text-2xl font-bold'>{currentState}</h1>
          <img className='h-5 ' onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />

        </div>

        <div className=' flex flex-col'>
          {currentState==="Login"?'': <input className='mb-3 border-2 h-10 rounded-md p-1' type="text" name="name" placeholder="name" required />}
         
          <input className='mb-3 border-2 h-10 rounded-md p-1' type="password" name="password" placeholder="password" required /><br />
          <input className='mb-3 border-2 h-10 rounded-md p-1' type="email" name="email" placeholder="email" required /><br />
       
          <button className='mt-1 mb-2 text-center bg-orange-500 p-2 rounded'>Create account</button><br/>
        
        </div>
        <div className='mb-1'>
        <input type="checkbox" />
        <p className='inline-block ml-2'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          {currentState==="Sign Up"?<p>Already have an account? <span onClick={()=>setcurrentState("Login")} className='text-orange-400 font-bold'>Login here</span></p>:
          <p>Create new account? <span onClick={()=>setcurrentState("Sign Up")} className='text-orange-400 font-bold'>Click here</span></p>}
           
        </div>
      </div>
    </div>
  )
}

export default LoginPopup