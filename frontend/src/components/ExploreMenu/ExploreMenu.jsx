import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({catagory,setcatagory}) => {
  // console.log("catagory:",catagory);
  return (
    <div>
        <h1>Explore Your Menu</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, commodi dolorem. Facere?</p>
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