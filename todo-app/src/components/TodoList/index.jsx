import React from 'react';
import { useState } from 'react';
import TodoItem from '../TodoItem';
import './styles.scss';


const TodoList = (props) => {
  const  data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  const [task ,setTask] = useState(data)
  const removeTodo = (id) => {
      const remove = task.filter((task) => task.id !== id)
      localStorage.setItem("todos", JSON.stringify(remove))
      setTask(remove)
  }
  return (
    <>
      <div className="todos">
     { task.map((data,index) => (
      <TodoItem 
      key= {index}
      id ={data.id}
      title= {data.title}
      author= {data.author}
      status= {data.status}
      desscription= {data.dessctription}
      removeTodo={removeTodo}
      />
     ))}
      </div>
    </>
  );
};

TodoList.propTypes = {};

export default TodoList;