import React from 'react';
import PropTypes from 'prop-types';
import "./Contact.css"
import CardItem from '../CardList/CardItem'

Contact.propTypes = {
    
};

function Contact(props) {
    const data = [
        {
          name : "Thành"
        },
        {
          name : "Quân"
        },
        {
          name : "Hiếu"
        },
        {
          name : "Khang"
        },
        {
          name : "Thảo"
        },
        {
          name : "Trang"
        },
        {
          name : "Tuấn"
        },
        {
          name : "Minh"
        },
        {
          name : "Lộc"
        },
        {
          name : "Tường"
        },
        {
          name : "Mãn"
        },
        {
          name : "Hậu"
        },
      ] 
    return (
        <div className='containerContact'>
            {data.map((data,index) => (
          <CardItem 
            key={index}
            name = {data.name}
          />

        ))}
        </div>
    );
}

export default Contact;