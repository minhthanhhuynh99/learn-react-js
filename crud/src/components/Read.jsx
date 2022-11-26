import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Read = () => {

    const [data,setData] = useState([]);

    const getData = () => {
        axios
        .get("https://63772d425c47776512162a9a.mockapi.io/crud-youtube")
        .then((res) =>{
            setData(res.data)
        })
    }

    const handleDelete = (id) => {
        axios.delete(`https://63772d425c47776512162a9a.mockapi.io/crud-youtube/${id}`)
        .then(() => {
            getData()
        })
    }

    useEffect(() => {
        getData();
    },[])


    return (
        <>
            <h2>Read Operation</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                {
                    data.map((item) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button className='btn-success'
                                    
                                            >Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn-danger'
                                                onClick={() => handleDelete(item.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
  
    );
};

export default Read;