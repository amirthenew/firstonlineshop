import React ,{useContext}from 'react';


//context
import { CartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/functions';

const Cart = (props) => {
    const {dispatch} = useContext(CartContext)
    const {image,title,price,quantity} = props.data
    return ( <div>
        <img src={image} alt='product'/>
        <div>
        <p>{price} $</p>
        <span>{quantity}</span>
        <h3>{shorten(title)}</h3>
        </div>

        <div>
        
        </div>
        </div> );
}
 
export default Cart;