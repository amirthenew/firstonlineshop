

import React,{useState,useEffect,createContext} from 'react';
//API
import { getProduct } from "../services/api"; 

export const ProductsContext = createContext()
const ProductContextProvider = ({children}) => {

    const [products,setProduct]=useState([])

useEffect(()=>{
    const fetchAPI = async ()=>{
    setProduct(await getProduct())
    }
fetchAPI()
},[]);


    return ( <ProductsContext.Provider value={products}>
    {children}
        </ProductsContext.Provider> );
}
 
export default ProductContextProvider;