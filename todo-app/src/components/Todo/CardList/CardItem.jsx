import React from 'react';
import PropTypes from 'prop-types';
import  { useState } from 'react'
import "./CardItem.css"

CardItem.propTypes = {
    
};

function CardItem(props) {
   
    const { name, title , desscription } = props;
    const [status, setStatus] = useState("New")

    const handSubmit = (e) => {
        const selectedStatus = e.target.value;
        setStatus(selectedStatus);
    }

    return (
        <div className="containerItem">
            <p className="containerItem__title">{title}</p>
            <p className="containerItem__creator">{name}</p>
            <p className="containerItem__status">Status: {status}</p>
            <hr className='containerItem__lineBreak'></hr>
            <p className="containerItem__description">Desscription: {desscription}</p>
            <button onChange={handSubmit} value={status}>
                <select name="" id="">
                    <option value="New">New</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </button>

        </div>
    );
}

export default CardItem;