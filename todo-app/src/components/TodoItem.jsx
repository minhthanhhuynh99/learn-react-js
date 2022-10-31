import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { STATUS } from '../constants'
TodoItem.propTypes = {
    
};

function TodoItem(props) {
    const {title, creator,description} = props
    const [status, setStatus] = useState(STATUS.NEW)

    const handleSubmit = () =>{
        switch (status) {
         case STATUS.NEW:
           setStatus(STATUS.DOING);
          
           break;
           case STATUS.DOING:
             setStatus(STATUS.DONE);
             break;
         default :
         setStatus(STATUS.NEW) 
           break;
        }
     }

    return (
        <div className='containerItem'>
            <p className='containerItem__title'>Title: {title}</p>
            <p className='containerItem__creator'>Creator: {creator}</p>
            <p className='containerItem__status'>Status: {status}</p>
            <hr className='containerItem__lineBreak' />
            <p className='containerItem__description'>Description: </p>
            <p>{description}</p>
            
           <div>
           <button 
                onClick={handleSubmit}
                value={status}
                >
                  {status}
            </button>
           </div>
        </div>
    );
}

export default TodoItem;
