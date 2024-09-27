import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {

    return (
        <footer className=' text-yellow-50 bg-slate-800 flex flex-col text-center ' id='footer'>

            <div className=' mt-10 flex flex-row justify-around'>
                <div className=''>
                    <img src={assets.logo} alt="" />
                    <p className=' w-96 mt-3 mb-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto iste possimus! Sed laboriosam assumenda eius aut eos rerum doloremque quae nihil aliquid autem?</p>
                    <div className=' flex gap-3'>
                        <img className='' src={assets.facebook_icon} alt="" />
                        <img className='' src={assets.linkedin_icon} alt="" />
                        <img className='' src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className='text-start'>
                    <h1 className='font-bold text-2xl mb-3' >Company</h1>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h1 className=' font-bold text-2xl mb-3'>GET IN TOUCH</h1>
                    <h4>+1-212-456-7890</h4>
                    <h4>contact@tomato.com</h4>
                </div>
            </div>

          <p className='mt-4 mb-6'>Copyright 2024 @ Tomato.com-All Right Reserved</p>
        </footer>
    )
}

export default Footer;