import React from 'react';
import { shorten } from '../../helper/functions';
import { Link } from 'react-router-dom';

const Product = ({productData}) => {
    return (<div>
        <img src={productData.image} alt="product" style={{width: "200px"}} />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
        <button>Add to Cart</button>
        </div>
        </div>
        </div>  );
}
 
export default Product;