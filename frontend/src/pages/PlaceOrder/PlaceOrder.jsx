import React from 'react'
import './PlaceOrder.css'
import { StoreCotext } from '../../Context/StoreContext'
import { useContext } from 'react'
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreCotext)
  return (
    <form className='mt-20  p-2 flex justify-around items-center flex-wrap mb-20'>
           <div className=' place'>
            <p className=' text-3xl font-bold space-x-1 mb-10' >Delivery Information</p>
            <div className='mb-3'>
              <input className=' border-2 w-64 p-1 rounded' type="text" placeholder='First name' />
              <input className=' ml-3 border-2 w-64 p-1 rounded' type="text" placeholder='Last name' />
            </div >
            <input className=' mb-3 border-2 w-full p-1 rounded' type="email" placeholder='Email address'/><br />
            <input className='  border-2 w-full p-1 rounded' type="text" placeholder='Street'/>
            <div className='mt-3 mb-3'>
              <input className=' border-2 w-64 p-1 rounded' type="text" placeholder='City' />
              <input className='ml-3 border-2 w-64 p-1 rounded' type="text"  placeholder='State'/>
            </div>
            <div className='mb-3'>
              <input className=' border-2 w-64 p-1 rounded' type="text" placeholder='Zip code' />
              <input className=' ml-3 border-2 w-64 p-1 rounded' type="text"  placeholder='Country'/>
            </div>
            <input className='mb-3  border-2 w-full p-1 rounded' type="text"  placeholder='Phone'/>
           </div>
          
           <div className='mb-20 mt-16 w-2/5 '>
      
        <div>
          <h2 className='mt-1 p-3 text-2xl font-bold'>Cart Totals</h2>
          <div className='mt-1 p-3 flex justify-between'>
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='mt-1 p-3 flex justify-between'>
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className='mt-1 p-3 flex justify-between' >
            <b>Total :</b>
            <b>${getTotalCartAmount()+2}</b>
          </div>
        </div>
       <button className='ml-2 mt-1 p-2 bg-orange-500 rounded'> PROCEED TO Payment </button>
       </div>
           
    </form>
  )
}

export default PlaceOrder;