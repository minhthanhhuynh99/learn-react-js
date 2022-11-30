import React, { useState } from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {v4 as uuidv4} from 'uuid';
import { useEffect } from 'react';
const Practices = () => {
    //add foods axios
    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("")
    const { reset } = useForm()

    const handleSubmit = (e) => {
        // e.preventDefault()
        axios.post("http://localhost:8000/foods",{
            id: uuidv4(),
            name: name,
            price: price,
            img: img,
        })
        reset()
    }
    //show
    const [data, setData] =useState([]);

    const getData = () => {
        axios.get("http://localhost:8000/foods").then((res) =>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <>
        <form>
            <h3>Create Foods</h3>
            <input type="text" placeholder='Enter Name...' onChange={(e) => setName(e.target.value)}/>
            <br />
            <input type="number" placeholder='Enter price...' onChange={(e) => setPrice(e.target.value)}/>
            <br />
            <input type="text" placeholder='Enter imager...' onChange={(e) => setImg(e.target.value)}/>
            <br />
            <button onClick={handleSubmit}>Add</button>
        </form>

        <div>
            <h3>List Foods</h3>
            <div>
               {
                data.map((item) => {
                    return(<>
                        <div>Name: {item.name}- Price: {item.price}</div>
                    </>)
                })
               }
            </div>
        </div>
        
        </>
    );
};

export default Practices;