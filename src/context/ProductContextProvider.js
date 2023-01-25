

import React,{useState,useEffect,createContext} from 'react';
//API
import { getProduct } from "../services/api"; 

const ProductContext = createContext()
const ProductContextProvider = (props) => {

    const [products,setProduct]=useState([])

useEffect(()=>{
    const fetchAPI = async ()=>{
    setProduct(await getProduct())
    }
fetchAPI()
},[]);


    return ( <ProductContext.Provider value={products}>
    {props.children}
        </ProductContext.Provider> );
}
 
export default ProductContextProvider;