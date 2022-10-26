import React from 'react';
import PropTypes from 'prop-types';
import "./Header.css"

Header.propTypes = {

};

function Header(props) {
    return (
        <div className="containerHeader">
            <div className="containerHeader__left">
                <button>Create New Tasks</button>
            </div>
            <div className="containerHeader__right">
                <input placeholder="Type something to search" />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;