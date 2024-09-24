import { createContext } from "react";

import {food_list} from '../assets/assets';



export const StoreCotext = createContext(null);

const StoreContextProvider = ({children})=>{


const contextValue={
    food_list
}


    return(
        <StoreCotext.Provider value={contextValue}>
             {children}
        </StoreCotext.Provider>
    )
}

export default StoreContextProvider;