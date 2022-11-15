import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Status } from '../datas/constains';
import {v4 as uuidv4} from 'uuid'
import './styles.scss';
const Form = (props) => {
    const data = localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')): [];
    // create validate from 
    const [msgErrors, setMsgErrors] = useState({})
    // set object task gom các element chuoi: '';
    const  [tasks ,setTasks] = useState({
        id : uuidv4(),
        title: '',
        author: '',
        dessctription:'',
        status: Status.NEW,
    }
    );
    // add envent onchange  value of input
    const onChangeText = (e) =>{
        setTasks((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
     validateForm()
    }
    //  valid form
    const validateForm = () =>{ 
    const isCheckTitle = checkTitleAlreadyExist()
      const errors = {};
      if (!tasks.title) {
        errors.title = "* title is required"
      }
      if (isCheckTitle === true) {
        errors.title = "* Title Already Exist"
      }
      if (!tasks.author) {
        errors.author = "* Author is required"
      }
      if (!tasks.dessctription) {
        errors.dessctription = "* Dessctription is required"
      }
        setMsgErrors(errors)
        if(Object.keys(errors).length === 0){
            return true;
        }else{
            return false;
        }
    }
    
    const checkTitleAlreadyExist = () => {
        let newTitleData = data.map(newTitleData => newTitleData.title)
        if (newTitleData.includes(tasks.title)) {
            return true;
        }
    }
    // add event submit  form localStore 
    let navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();
           const isValid = validateForm();
           if (!isValid) {
                return;
           }
        // push data lên localStore   
            data.push(tasks);
            localStorage.setItem('todos', JSON.stringify(data));
            let path = '/';
            navigate(path);
    }
    return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <div className="form__group">
            <label htmlFor="">title</label>
            <input type="text" 
            name="title"
            value={tasks.title}
            onChange={onChangeText}
            />
            <span>{msgErrors.title}</span>
        </div>
        <div className="form__group">
            <label htmlFor="">Creator</label>
            <input 
                type="text"  
                name="author"
                value={tasks.creator}
               onChange={onChangeText}
            />
            <span>{msgErrors.author}</span>
        </div> 
        <div className="form__group">
            <label htmlFor="">dessctription</label>
            <input type="text"
            name="dessctription"
            value={tasks.dessctription}
            onChange={onChangeText}
            />
            <span>{msgErrors.dessctription}</span>
        </div> 
        <div className="form__submit">
            <input type="submit" value={'Save'}/> 
        </div>
    </form>
    </>
  );
};
export default Form;