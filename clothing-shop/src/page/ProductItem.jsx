import React from 'react';
import axios from 'axios';
import '../styles/ProductItem.css'
const ProductItem = ({item}) => {
    let qty = 1;
    const addToCart = async (a,b) => {
        alert('Bạn đã thêm sản phảm vào giỏ hàng')
        let isExisting = false
        const result = await axios.get('http://localhost:2000/order');
        if (result.data.length === 0) {
            const order ={name: a,price: b,qty: qty};
            axios.post('http://localhost:2000/order', order);
        }else {
            result.data.map((orderItem) => {
                if (a === orderItem.name) {
                    orderItem.qty +=1;
                    const order ={
                        name: a,
                        price: b,
                        qty: orderItem.qty,
                    };
                    axios.put(`http://localhost:2000/order/${orderItem.id}`, order);
                    isExisting = true
                }
            });
            if (isExisting == false) {
                const order = {
                    name: a,
                    price: b,
                    qty: qty,
                };
                axios.post('http://localhost:2000/order', order);
            }
        }
    }
    return (
        <div className='product-cart'>
            <div className='product-img'>
                <img src={item.img} alt="" />
            </div>
            <p>{item.name}</p>
            <a>${item.price}</a><br />
            <button onClick={() => addToCart(item.name,item.price)}>Add to cart</button>
        </div>
    );
};

export default ProductItem;