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
        </div>
    );
}
 
export default ShopCart;

<div>
shop cart
</div>