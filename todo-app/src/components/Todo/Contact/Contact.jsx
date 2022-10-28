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
          title : "task 1",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Toàn",
          title : "task 2",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Hiếu",
          title : "task 3",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Khang",
          title : "task 4",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Thảo",
          title : "task 5",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Trang",
          title : "task 6",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Tuấn",
          title : "task 7",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Minh",
          title : "task 8",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Lộc",
          title : "task 9",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Ngọc",
          title : "task 10",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Minh",
          title : "task 11",
          creator : "author 1",
          desscription : "This is a task,This is a task,This is a task..."
        },
        {
          name : "Hậu",
          title : "task 12",
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