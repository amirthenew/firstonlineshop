import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../shared/Navbar.module.css'

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../img/shop.png"

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.container} to="/products">Products</Link>
                <div className={styles.iconCounter}>
                    <Link to="/Cart"><img style={{width:'20px'}} src={shopIcon} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;