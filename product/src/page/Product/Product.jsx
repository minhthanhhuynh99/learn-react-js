import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Product.css';


const Product = ({ handleAdd }) => {
   const [products,setProducts] = useState([]);
   const [filters,setFilters] = useState([]);

   useEffect(() => {
        const fetchProducts = async () => {
            try{
                const data = await fetch('http://localhost:4000/product');
                const products = await data.json();

                setProducts(products);
                setFilters(products)
            }
            catch(err){
                console.log(err)
            }
        };
        fetchProducts();
   },[])
   
    return (
        <>
            <div className='product-container'>
                {
                    products.map(item =>(
                        <ProductItem key={item.id} item={item} handleAdd={handleAdd}/>
                    ))
                }
            </div>
        </>
    )
};

export default Product;