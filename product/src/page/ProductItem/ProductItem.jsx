import React, { useState } from 'react';
import "./ProductItem.css"
const ProductItem = ({item, handleAdd }) => {
    
    return (
        <div className='product-cart'>
            <div className='product-img'>
                <img src={item.image} alt="" />
            </div>
            <h3>{item.id}</h3>
            <p>{item.name}</p>
            <a>{item.price}</a><br />
            <button onClick={() => handleAdd(item)}>Add to cart</button>
        </div>
    );
};

export default ProductItem;