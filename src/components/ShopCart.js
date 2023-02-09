import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//components
import Cart from './shared/Cart';

// contexts
import { CartContext } from '../context/CartContextProvider';

import styles from './ShopCart.module.css'

const ShopCart = () => {

    const {state,dispatch} = useContext(CartContext)


    return (  

        <div className={styles.container}>
        <div className={styles.cartContainer}>
        {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>
        {
            state.itemsCounter>0 && 
            <div className={styles.payment}> 
            <p><span> total items : </span> {state.itemsCounter}</p>
            <p><span> total payment : </span> {state.total}</p>
            
<div className={styles.buttonContainer}>
<button className={styles.checkout} onClick={()=> dispatch({type:'CHECKOUT'})}>checkout</button>
<button className={styles.clear} onClick={()=> dispatch({type:'CLEAR'})}>Clear</button>
</div>

            </div>
        }
        {
         state.checkout && <div className={styles.complete}>
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