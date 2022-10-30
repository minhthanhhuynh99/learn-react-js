import React from 'react';
import PropTypes from 'prop-types';
TodoItem.propTypes = {
    
};

function TodoItem(props) {
    const {title, creator, status ,description} =props

    // const [status ,setStatus] = useState("New")
    return (
        <div className='containerItem'>
            <p className='containerItem__title'>Title: {title}</p>
            <p className='containerItem__creator'>Creator: {creator}</p>
            <p className='containerItem__status'>Status: {status}</p>
            <hr className='containerItem__lineBreak' />
            <p className='containerItem__description'>Description: This is a Task</p>
            <p>{description}</p>
        </div>
    );
}

export default TodoItem;
