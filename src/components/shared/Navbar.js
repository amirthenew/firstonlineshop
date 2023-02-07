import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from './../../context/CartContextProvider';

import shopIcon from '../../img/shop.png'

const Navbar = () => {
    
const{state}=useContext(CartContext)

    return ( <div>
        <div>
        
        <Link to='/product'>product</Link>
        <div>
        <Link><img style={{width:'20px'}} src={shopIcon} alt='shop'/></Link>
         <span>{state.itemsCounter}</span>
        </div>
       
        </div>
        </div> );
}
 
export default Navbar;

