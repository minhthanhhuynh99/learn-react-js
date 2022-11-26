import React from 'react';
import '../styles/Create.css';
import isEmpty from 'validator/lib/isEmpty';
import {v4 as uuidv4} from 'uuid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Create = () => {

    const [products,setProducts] = useState([]);
    const [id, setId] = uuidv4();
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    //state validate:
    const [validationMsg,setValidationMsg] = useState('');

    const validateAll = () => {
        const msg = {}
        if (isEmpty(name)) {
            msg.name = '* Mời bạn nhập Name *'
        }
        if (isEmpty(img)) {
            msg.img = '* Mời bạn nhập Image *'
        }
        if (isEmpty(price)) {
            msg.price = '* Mời bạn nhập giá *'
        }

        setValidationMsg(msg)
        if (Object.keys(msg).length > 0)return false
        return true
    }


    useEffect(() => {
        loadData()
    }, []);
    //get product form Api
    const loadData = async () => {
        const response = await axios.get('http://localhost:2000/product');
        setProducts(response.data)
    }
    //add product
    const addProduct = (e) => {

        
        e.preventDefault();
        const isValid = validateAll()
        if (!isValid) return

        axios.post('http://localhost:2000/product',{
            id,name,img,price
        }).then(() => {
            setName('');
            setImg('');
            setPrice('');
        }).catch((err) => {
            console.log(err)
        })
        alert('ban da them 1 san pham vao gio hang')
    }

    return (
        <div className='container'>
            <h3>Add New Product</h3>
            <form className='form-container'>
                <input type="text"
                placeholder='Enter Name...'
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <br />
                <span className='err'>{validationMsg.name}</span>
                <br />
                <input type="text"
                placeholder='Enter Image...'
                value={img}
                onChange={e => setImg(e.target.value)}
                />
                <br />
                <span className='err'>{validationMsg.img}</span>
                <br />
                <input type="number"
                placeholder='Enter Price...'
                value={price}
                onChange={e => setPrice(e.target.value)}
                />
                <br />
                <span className='err'>{validationMsg.price}</span>
                <br />
                <button onClick={addProduct}>Save</button>
            </form>
    </div>
    );
};

export default Create;