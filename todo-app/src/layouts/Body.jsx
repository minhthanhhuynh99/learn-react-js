import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../components/TodoItem'


Body.propTypes = {
    
};

function Body(props) {
    const todoList =[
      {
        title:"task1",
        creator:"Thành",
        status:"new",
        desscription: "This is a task, This is a task, This is a task,...",
      },
      {
        title:"task2",
        creator:"Hoàng",
        status:"doing",
        desscription: "This is a task, This is a task, This is a task,...",
      },
      {
        title:"task3",
        creator:"Hiếu",
        status:"new",
        desscription: "This is a task, This is a task, This is a task,...",
      },
      {
        title:"task4",
        creator:"Quân",
        status:"doing",
        desscription: "This is a task, This is a task, This is a task,...",
      },
      {
        title:"task5",
        creator:"Khang",
        status:"new",
        desscription: "This is a task, This is a task, This is a task,...",
      },  {
        title:"task6",
        creator:"Trọng",
        status:"new",
        desscription: "This is a task, This is a task, This is a task,...",
      },  {
        title:"task7",
        creator:"Toàn",
        status:"new",
        desscription: "This is a task, This is a task, This is a task,...",
      },
      {
        title:"task8",
        creator:"Huy",
        status:"new",
        desscription: "This is a task, This is a task, This is a task,...",
      }
    ];
   
      return (
        <div className='containerBody'>
            {todoList.map((item,index) => (
                <TodoItem key={index} title={item.title} creator={item.creator} status={item.status} />
            ))}
        </div>
      )
  }

export default Body;