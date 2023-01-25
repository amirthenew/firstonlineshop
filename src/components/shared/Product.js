import React from 'react';


const Product = ({productData}) => {
    return (<div>
        <img/>
        <h3>{productData.title}</h3>
        <p>Price</p>
        <div>
        <a>Details</a>
        <div>
        <button>Add to Cart</button>
        </div>
        </div>
        </div>  );
}
 
export default Product;