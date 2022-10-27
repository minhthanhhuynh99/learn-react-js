import React from 'react';
import PropTypes from 'prop-types';
import "./CardItem.css"

CardItem.propTypes = {
    
};

function CardItem(props) {
   
    const { name } = props;
    return (
        <div className="containerItem">
            <p className="containerItem__title">Title: task</p>
            <p className="containerItem__creator">{name}</p>
            <p className="containerItem__status">Status: New</p>
            <hr className='containerItem__lineBreak'></hr>
            <p className="containerItem__description">Description: This is a task</p>
        </div>
    );
}

export default CardItem;