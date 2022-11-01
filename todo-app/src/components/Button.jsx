import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    
};

function Button( { buttonClass, title, style, onClick, type }) {
    return (
        <div className={`buttonClass ${buttonClass}`} style={style} title={title} onClick={onClick} type={type}>
            {title}
        </div>
    );
}

export default Button;