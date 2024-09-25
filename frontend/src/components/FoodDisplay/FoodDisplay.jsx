import React,{useContext} from 'react'
import './FoodDisplay.css';
import { StoreCotext } from '../../Context/StoreContext'

import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({catagory}) => {
    // console.log("catagory:",catagory)
    const {food_list} = useContext(StoreCotext)
  return (
    <div className='food '>
        {
            food_list.map((item,index)=>{
                if (catagory==="all" || catagory===item.category )
                {
                return(
                  
                        <div key={index} className='foodDisplay rounded-lg p-1'>
                        <FoodItem   id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} catagory={item.category}/>
                        </div>                  
                )
            }
            })
        }
    </div>
  )
}

export default FoodDisplay