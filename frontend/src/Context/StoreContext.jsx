import { createContext,useState } from "react";

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

// useEffect(() => {
//  console.log("cartItems:",cartItems);
  
// }, [cartItems])

const getTotalCartAmount =()=>{
    let totalAmount=0;
    for (const item  in cartItems) {
        if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id=== item)
            totalAmount += itemInfo.price * cartItems[item];

        }
    }
    return totalAmount;
}


const contextValue={
    food_list,
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    
}


    return(

        <StoreCotext.Provider value={contextValue}>
             {children}
        </StoreCotext.Provider>
    )
}

export default StoreContextProvider;