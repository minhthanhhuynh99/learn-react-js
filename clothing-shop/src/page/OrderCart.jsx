import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/Cart.css';
const OrderCart = () => {

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        loadItem()
    }, []);


    var totalPrice = 0
    const loadItem = async () => {
        const result = await axios.get('http://localhost:2000/order');
        setItems(result.data);
        result.data.map((prices) => {
            totalPrice += prices.qty * Number(prices.price);
        });
        setTotal(totalPrice)
    }

    const deleteOrder = async (id) => {
        let isDelete = window.confirm('Bạn có muốn xóa khỏi giỏ hàng không?');
        if (isDelete) {
            await axios.delete(`http://localhost:2000/order/${id}`);
            loadItem();
        }
    }

    const incDec = async (a,b,c,d,e) => {
        if (c === 'dec') {
            if(a === 1) {
                a = 1
            }else {
                a -= 1
            }
        }else {
            if(a === 20) {
                a = 20
                alert('không đủ sản phẩm trong cửa hàng')
            }else {
                a += 1
            }
        }
        const order = {name: d, price: e, qty: a};
        await axios.put(`http://localhost:2000/order/${b}`, order);
        loadItem();
    }   

    return (
        <div className='order-container'>
            {
                items.map((item) => (
                    <div className='order-cart' key={item.id}>
                        <div className='order-item'>{item.name}</div>
                        <div className='order-qty'>
                            <button className='btn' onClick={() => incDec(item.qty,item.id, 'dec',item.name,item.price)}>-</button>
                            <input type="text" className='input' value={item.qty}/>
                            <button className='btn' onClick={() => incDec(item.qty,item.id, 'inc',item.name,item.price)}>+</button>
                        </div>
                        <div className='order-price'>${(item.qty * Number(item.price))}</div>
                        <button className='delete-btn'
                            onClick={() => deleteOrder(item.id)}
                        >Remove</button>
                    </div>
                ))
            }
            <div className='order-total'>
                <div className='total'>Total</div>
                <div className='total-price'>${total}</div>
                <div className='place-order-btn'>Place Order</div>
            </div>
        </div>
    );
};

export default OrderCart;