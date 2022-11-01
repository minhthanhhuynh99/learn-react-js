import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../components/TodoItem'
import Form from '../shared/Form';
import { MODE, STATUS, todoList  } from '../constants'

Body.propTypes = {
    
};

function Body( { mode , handleChangeRenderMode } ) {
  const { NEW , DOING, DONE} = STATUS

  const [ todoItems , setTodoItems ] = useState(todoList)
      const renderTodoItem = () => {
        return todoItems.map((item,index) => (
          <TodoItem key={index} title={item.title} creator={item.creator} status={item.status} description={item.description} />
        ))
      }
  
  const chooseMode = () => {
    switch (mode) {
      case MODE.SHOW_LIST:
        return renderTodoItem();
      case MODE.ADD_NEW:
        <Form 
          handleSubmit={(e) =>{
              e.preventDefault();
              const data = {
                  title : e.target[0].value,
                  creator: e.target[1].value,
                  description: e.target[2].value,
                  status: STATUS.NEW,
              };
              setTodoItems([data, ...todoItems]);
              handleChangeRenderMode(MODE.SHOW_LIST)
          }} 
        />
        default:
          return renderTodoItem();    
    };
  }

      return (
        <div className='containerBody'>
            {todoList.map((item,index) => (
                <TodoItem key={index} title={item.title} creator={item.creator} status={item.status} description={item.description} />
            ))}

            <Form handleSubmit={() => {}}/>
            {/* {chooseMode()} */}
        </div>
      )
  }

export default Body;