import React from 'react';
import PropTypes from 'prop-types';
import "./Contact.css"
import CardItem from '../CardList/CardItem'

Contact.propTypes = {
    
};

function Contact(props) {
    const data = [
        {
          name : "Thành",
          title : "Task 1",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Toàn",
          title : "Task 2",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Hiếu",
          title : "Task 3",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Khang",
          title : "Task 4",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Thảo",
          title : "Task 5",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Trang",
          title : "Task 6",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Tuấn",
          title : "Task 7",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Minh",
          title : "Task 8",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Lộc",
          title : "Task 9",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Ngọc",
          title : "Task 10",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Minh",
          title : "Task 11",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Hậu",
          title : "Task 12",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        }
        
      ] 
    return (
        <div className='containerContact'>
            {data.map((data,index) => (
          <CardItem key={index} name = {data.name} title={data.title} desscription={data.desscription}/>

        ))}
        </div>
    );
}

export default Contact;