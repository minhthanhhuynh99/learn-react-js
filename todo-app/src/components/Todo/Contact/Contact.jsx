import React from 'react';
import PropTypes from 'prop-types';
import "./Contact.css"
import CardItem from '../CardList/CardItem'

Contact.propTypes = {
    
};

function Contact(props) {
    return (
        <div className='containerContact'>
            <CardItem />
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </div>
    );
}

export default Contact;