import React, { useContext } from 'react'
import './Cart.css'
import {StoreCotext} from '../../Context/StoreContext'
import { Link } from 'react-router-dom';



const Cart = () => {
  const {cartItems , food_list , removeFromCart , getTotalCartAmount} = useContext(StoreCotext);

  return (
    <div className='mt-20'>
      <div className=' flex flex-col '>
        <div className='w-full  flex justify-between   ml-4 mb-5' >
          <p >Items</p>
          <p>Title</p>
          <p className='ml-20'>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <div className=' flex flex-col'>
        
        {food_list.map((item,index)=>{
          if (cartItems[item._id]>0) {
            return(
              
              <div key={index} className='mr-0  p-3 border-y-2'>
                
                   <div className=' flex flex-row  justify-between'>
                    <img className='h-10 w-11 ' src={item.image} alt="" />
                    <p className=' w-24 bg-white' >{item.name}</p>
                    <p >${item.price}</p>
                    <p >{cartItems[item._id]}</p>
                    <p >${item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='text-red-400 font-bold cursor-pointer text-xl'>cross</p>
                   </div>
              </div>
            )
          }
        })}
            </div>
      </div>
      <div className='flex justify-around items-center'>
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
       <Link to="/order"> <button className='ml-2 mt-1 p-2 bg-orange-500 rounded'> PROCEED TO CHECKOUT </button></Link>
       </div>
      
      <div>
        <p>If you have a procoder .Please join me:</p>
        <div>
          <input className=' border-2 p-1 w-80' type="text" placeholder='promo code' 
          
          />
          <button className='bg-black text-white p-1 w-20 ml-2 border-2'>Submit</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart