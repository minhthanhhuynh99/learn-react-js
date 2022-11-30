import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { useEffect, useState } from 'react';
import {setProducts} from '../redux/actions/productActions'


const MenuFoods = () => {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const res = await axios.get("http://localhost:8000/foods").catch((err) => {
            console.log(err)
        })
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    // console.log(products)

    //add to cart
    const [items, setItems] = useState([]);
    let qty=1
    const addToCart = async (a, b, c) => {
        const result = await axios.get('http://localhost:8000/order');
        const order ={name: a,price: b, img: c ,qty: qty};
        axios.post('http://localhost:8000/order', order);
    }

    const loadItem = async () => {
        const result = await axios.get('http://localhost:8000/order');
        setItems(result.data);
    }
    useEffect(() => {
        loadItem()
    },[])
    return (
        <>
        <h3>Menu Foods</h3>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            
           <div style={{display: 'flex', gap: "10px"}}>
                {
                    products.map((item) => {
                        return (
                            <div style={{width: "200px", border: "3px solid black"}}>
                                <img style={{width: "200px"}} src={item.img} alt="" />
                                <p>Name: {item.name}</p>
                                <span>Price: {item.price}</span>
                                <br />
                                <button onClick={() => addToCart(item.name,item.price,item.img)}>Add to Cart</button>
                            </div>
                        )
                    })
                }
           </div>
           <div style={{width: "30%", backgroundColor: 'GrayText'}}>
                <h1>Cart</h1>
                <div style={{display: "flex", justifyContent: 'space-evenly'}}>
                {items.map((item) => {
                    return (
                    <div style={{display: "inline-block"}}>
                        <img style={{width: '50px'}} src={item.img} alt="" />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                    )
                })} 
                </div>
           </div>
        </div>
        </>
    );
};

export default MenuFoods;