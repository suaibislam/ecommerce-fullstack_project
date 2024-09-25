import { createContext,useState ,useEffect} from "react";

import {food_list} from '../assets/assets';



export const StoreCotext = createContext(null);

const StoreContextProvider = ({children})=>{

const [cartItems, setcartItems] = useState({})
const addToCart = (itemId)=>{
    if (!cartItems[itemId]) {
        setcartItems((prev)=>({...prev , [itemId]:1}))
    }else{
        setcartItems((prev)=>({...prev ,[itemId]:prev[itemId]+1}))
    }
}

const removeFromCart = (itemId)=>{
    setcartItems((prev)=>({...prev, [itemId]:prev[itemId]-1 }))
}

useEffect(() => {
 console.log("cartItems:",cartItems);
  
}, [cartItems])


const contextValue={
    food_list,
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,

    
}


    return(
        <StoreCotext.Provider value={contextValue}>
             {children}
        </StoreCotext.Provider>
    )
}

export default StoreContextProvider;