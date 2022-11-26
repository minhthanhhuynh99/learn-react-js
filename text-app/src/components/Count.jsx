import React, { useState } from 'react';

const Count = () => {

    const [count, setCount] = useState(0)
    const increment = () => {
       setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div style={{width: "300px" , margin: "0 auto", backgroundColor: "grey", height:"200px"}}>
                <p style={{width: "50%", height: "100px" ,fontSize: "1.8rem", border: "1px solid black", margin: '0 auto', color: "white"}}>{count}</p>
                <button style={{padding: "5px 17px", backgroundColor: "green", color: "white"}} onClick={increment}>+</button>
                <button style={{padding: "5px 17px", backgroundColor: "yellow", color: "white"}} onClick={reset}>reset</button>
                <button style={{padding: "5px 17px", backgroundColor: "pink", color: "white"}} onClick={decrement}>-</button>
            </div>
        </>
    );
};

export default Count;