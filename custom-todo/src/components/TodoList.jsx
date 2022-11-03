import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTask from '../modals/CreateTask';
import CartItem from './CartItem';
import './TodoList.scss'


const TodoList = () => {
    const [modal,setModal] = useState(false);
    const [taskList,setTaskList] = useState([]);

    useEffect(() => {
        let arr =localStorage.getItem('TaskList')

        if(arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, []);

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj)
        localStorage.setItem('TaskList', JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }
    return (
       <>
            <div>
                <button className='btn btn-secondary mt-4'  onClick={()=> setModal(true)}>Create New Tasks</button>
            </div>
            <div className='task-container '>
                {taskList && taskList.map((obj,index) => <CartItem taskObj={obj} index={index}/>)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
       </>
    );
};

export default TodoList;