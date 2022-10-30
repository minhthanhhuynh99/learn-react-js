import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../components/TodoItem'
import { STATUS, todoList } from '../constants'

Body.propTypes = {
    
};

function Body(props) {
  const { NEW , DOING, DONE} = STATUS
      return (
        <div className='containerBody'>
            {todoList.map((item,index) => (
                <TodoItem key={index} title={item.title} creator={item.creator} status={item.status} description={item.description} />
            ))}
        </div>
      )
  }

export default Body;