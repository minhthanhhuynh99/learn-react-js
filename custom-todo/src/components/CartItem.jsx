import React , { useState } from 'react';
import './CartItem.scss'

const CartItem = ( {taskObj, index} ) => {
    const [status, setStatus] = useState('New')

    const handleSubmit = () => {
        if(status === "New"){
            setStatus("Doing")
        } else if(status === "Doing"){
            setStatus("Done")
        }else {
            setStatus("New")
        }
    }
    return (
        <div class="cartItemContainer">
            <div class="cartItemContainer__header">{taskObj.Name}</div>
            <div class="cartItemContainer__body">
                <p class="cartItemContainer__body__top">Name: {taskObj.Creator}</p>
                <p class="cartItemContainer__body__bottom">Des: {taskObj.Description}</p>
                <p>Status: {status}</p>
            </div>
            <div className='cartItemContainer__btn'>
                <button 
                onClick={() =>handleSubmit()}
                >add</button>
            </div>
        </div>
    );
};

export default CartItem;