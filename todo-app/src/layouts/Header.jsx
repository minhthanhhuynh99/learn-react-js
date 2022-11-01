import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header( { handleCreateNewTask } ) {
    return (
        <div className='containerHeader'>
            <div className='containerHeader__left'>
                <button onClick={handleCreateNewTask}>Create New Task</button>
            </div>
            <div className='containerHeader__right'>
                <input type="text" placeholder='Type something to search' />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;