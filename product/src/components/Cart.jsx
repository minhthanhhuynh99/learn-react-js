import React, { useEffect } from 'react';
import { useState } from 'react';
import './Cart.css';
const Cart = ( {cart, setCart, handleChange  } ) => {
    const [price,setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
    console.log(price)

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect (() => {
        handlePrice();
    })

    return ( 
        <div className='cart-container'>
            {
                cart.map((item,index) => (
                <div className='cart-box' key={index}>
                    <div className='cart-img'>
                        <img src={item.image}/>
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Xóa</button>
                    </div>
                </div>
                ))
            }

            <div>
                <span>Thành tiền:</span>
                <span>{price}</span>
            </div>
        </div>
    )     
};

export default Cart;