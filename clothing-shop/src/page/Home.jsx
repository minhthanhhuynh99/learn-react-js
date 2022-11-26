import React from 'react';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import '../styles/Home.css';

const Home = () => {
    const [products,setProducts] = useState([]);
    const [filters,setFilters] = useState([]);

    useEffect(() => {
            const fetchProducts = async () => {
                try{
                    const data = await fetch('http://localhost:2000/product');
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
            <p className='total'>Total: {products.length}</p>
            <div className='product-container'>
                {
                    products.map(item =>(
                        <ProductItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </>
    )
};

export default Home;