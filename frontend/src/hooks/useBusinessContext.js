import { BusinessContext } from "../context/businessContext";
import { useContext } from "react";

export const useBusinessContext = () => {
    const context = useContext(BusinessContext)

    if(!context){
        throw Error('useBusinessContext must be used inside a BusinessContextProvider')
    }

    return context
}