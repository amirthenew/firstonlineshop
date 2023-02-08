import React ,{useContext}from 'react';

import trashIcon from '../../img/delete.png'

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
        {
            quantity>1 ? <button onClick={()=>dispatch({type:'DECREASE',payload : props.data})}> - </button> :
            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload : props.data})}><img style={{width:'20px'}} src={trashIcon}/></button>
        }
        </div>
        </div> );
}
 
export default Cart;