import React,{useContext} from 'react';

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
        </div>
    );
}
 
export default ShopCart;

<div>
shop cart
</div>