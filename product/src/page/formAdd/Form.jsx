import React from 'react';
import { useEffect, useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Form.css'
const Form = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState(1)

  useEffect(() => {
    loadData();
  }, []);


  const loadData = async () => {
    const response = await Axios.get('http://localhost:4000/product');
    setUsers(response.data)
  }
  let navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:4000/product', {
      id, name, image, price, amount
    }).then(() => {
      setId("");
      setName("");
      setImage("");
      setPrice("");
      setAmount(1)
    }).catch((err) => {
      console.log(err)
    })

    let path = '/all-product';
    navigate(path);
  }
  return (
    <div className='container'>
      <h3>Add New Product</h3>
      <form className='form-container'>
        <input type="text"
          placeholder='Enter Id...'
          value={id}
          onChange={e => setId(e.target.value)}
        /> <br />
        <input type="text"
          placeholder='Enter Name...'
          value={name}
          onChange={e => setName(e.target.value)}
        /> <br />
        <input type="text"
          placeholder='Enter Image...'
          value={image}
          onChange={e => setImage(e.target.value)}
        /> <br />
        <input type="number"
          placeholder='Enter Price...'
          value={price}
          onChange={e => setPrice(e.target.value)}
        /> <br />
        <button onClick={handleAdd}>Save</button>
      </form>
    </div>
  );
};

export default Form;