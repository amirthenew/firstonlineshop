import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//components
import Cart from './shared/Cart';

// contexts
import { CartContext } from '../context/CartContextProvider';


const ShopCart = () => {

    const {state,dispatch} = useContext(CartContext)


    return (  

        <div>
        <div>
        {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>
        {
            state.itemsCounter>0 && <div> 
            <p><span> total items : </span> {state.itemsCounter}</p>
            <p><span> total payment : </span> {state.total}</p>
            
<div>
<button onClick={()=> dispatch({type:'CHECKOUT'})}>checkout</button>
<button onClick={()=> dispatch({type:'CLEAR'})}>Clear</button>
</div>

            </div>
        }
        {
         state.checkout && <div>
         <h3>checked out successfully</h3>
         <Link to='./products'>buy more</Link>
         </div>   
        }


        {
            !state.checkout && state.itemsCounter===0 && <div>
            <h3>want to buy ?</h3>
            <Link to='./products'>go back to shop</Link>
            </div>   
           }
        </div>
    );
}
 
export default ShopCart;

<div>
shop cart
</div>