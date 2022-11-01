import React,{ useState } from 'react';
import { Status } from '../datas/constains';
import {v4 as uuidv4} from 'uuid'
import './styles.scss'

const Form = (props) => {
    

    const  [tasks ,setTasks] = useState({
        id : uuidv4(),
        title: '',
        author: '',
        dessctription:'',
        status: Status.NEW,
    }
    );
    const onChangeText = (e) =>{
     setTasks((prev) =>({
         ...prev,
         [e.target.name]: e.target.value,
     }))
 
    }
    // button submit form 
    const handleSubmit = (e) => {
        e.preventDefault();
        // formValidation()
        let data = JSON.parse(localStorage.getItem('todos'));
        data.push(tasks);
        localStorage.setItem('todos', JSON.stringify(data))
    }
    return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <div className="form__group">
            <label htmlFor="">title</label>
            <input type="text" 
            name="title"
            value={tasks.title}
            onChange = {onChangeText}
            />
            {/* <InputText InputValue={tasks.title}/> */}
        </div>
        <div className="form__group">
            <label htmlFor="">Creator</label>
            <input 
                type="text"  
                name="author"
                value={tasks.author}
               onChange = {onChangeText}
            />
        </div> 
        <div className="form__group">
            <label htmlFor="">dessctription</label>
            <input type="text"
            name="dessctription"
            value={tasks.dessctription}
            onChange = {onChangeText}
            />
        </div> 
        <div className="form__submit">
            <input type="submit" /> 
        </div>
    </form>
    </>
  );
};

Form.propTypes = {};

export default Form;