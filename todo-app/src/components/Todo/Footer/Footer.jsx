import React from 'react';
import PropTypes from 'prop-types';
import "./Footer.css";

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className='containerFooter'>
           <div className='containerFooter_page'>
                {" < "}
           </div>
           <div className='containerFooter_page'>
                {" 1 "}
           </div>
           <div className='containerFooter_page'>
                {" 2 "}
           </div>
           <div className='containerFooter_page'>
                {" 3 "}
           </div>
           <div className='containerFooter_page'>
                {" > "}
           </div>
        </div>
    );
}

export default Footer;