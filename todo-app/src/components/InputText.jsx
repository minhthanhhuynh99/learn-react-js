import React from 'react';
import PropTypes from 'prop-types';

InputText.propTypes = {
    
};

function InputText( { inputClass,label,placeholder,name,value,onChange } ) {
    return (
        <div className={`inputText ${inputClass}`}>
            <label htmlFor={name}>{label}</label>
            <input type="text"  name={name} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
}

export default InputText;