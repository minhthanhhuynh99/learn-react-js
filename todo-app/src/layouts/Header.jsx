import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className='containerHeader'>
            <div className='containerHeader__left'>
                <button>Create New Task</button>
            </div>
            <div className='containerHeader__right'>
                <input type="text" placeholder='Type something to search' />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;