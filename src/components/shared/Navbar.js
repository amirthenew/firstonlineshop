import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../img/shop.png"

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/Cart"><img style={{width:'20px'}} src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;