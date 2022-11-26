import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin" : "*" }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            "https://63772d425c47776512162a9a.mockapi.io/crud-youtube",
            {name: name,
             email: email,
             header,
            }
        )
        .then(() => {
            history("/read");
        })
    }

    return (
        <>
            <form>
                <h2>Create</h2>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            
                <button type="submit" className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Create;