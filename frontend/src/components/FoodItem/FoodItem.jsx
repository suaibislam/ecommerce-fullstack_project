import React,{useContext} from 'react'

import { assets } from '../../assets/assets'
import { StoreCotext } from '../../Context/StoreContext'

const FoodItem = ({id,name,image,price,description,catagory}) => {
  // const [count, setcount] = useState(0)
 
  const { cartItems,addToCart,removeFromCart} = useContext(StoreCotext);
  return (
    <div className=' relative '>
        <img src={image} alt="" />
        {!cartItems[id]? <img onClick={()=>addToCart(id)} className='multiPlus absolute right-3 bottom-36' src={assets.add_icon_white} alt="" />
        : <div className=' bg-white p-1 rounded-lg flex gap-2 absolute right-3 bottom-36'>
          <img onClick={()=>removeFromCart(id)} className='' src={assets.remove_icon_red} alt="" />
            <h1>{cartItems[id]}</h1>
          <img onClick={()=>addToCart(id)} className='' src={assets.add_icon_green} alt="" />
          </div>}
        <div className='flex flex-row justify-between items-center'>
            <h1 className=' text-2xl font-bold'>{name}-{catagory}</h1>
            
            <img className=' h-5' src={assets.rating_starts} alt="" />
        </div>
        <p>{description}</p>
        <h2 className=' text-orange-600 font-bold text-xl'>${price}</h2>
        
    </div>
  )
}

export default FoodItem