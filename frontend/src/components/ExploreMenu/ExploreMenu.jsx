import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({catagory,setcatagory}) => {
  // console.log("catagory:",catagory);
  return (
    <div id='explore-menu' className='explore-list'>
        <h1 className=' text-center font-bold text-xl'>Explore Your Menu</h1>
        <p className=' text-center mb-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, commodi dolorem. Facere?</p>
        <div className='menu-list'>
          {
            menu_list.map((item,key)=>{
                return(
                  <div className='menu-list-item' onClick={()=>setcatagory(prev=>prev===item.menu_name?"all":item.menu_name)} key={key}>
                   
                    <img className={catagory===item.menu_name?"active":""}  src={item.menu_image} alt="img"  />
                    <h1>{item.menu_name}</h1>
                    
                  </div>
                )
            })
          }
        </div>
    </div>
  )
}

export default ExploreMenu