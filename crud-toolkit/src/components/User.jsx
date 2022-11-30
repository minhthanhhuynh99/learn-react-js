import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { addUser, deleteUser } from '../redux/usersSlice';
import { addNewUser, fetchUser} from '../redux/usersSlice';
const User = () => {
    const [name, setName] = useState()
    const users = useSelector((state) => state.users.items)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])
    return (
        <div>
            <form action="">
                <input type="text" 
                    placeholder='enter name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    dispatch(addNewUser({id:users.length + 1 ,name: name}))
                    setName("")
                }}>Add</button>
            </form>

            <div>
                {users.map((item) => (
                   <div key={item.id}>
                    <p>{item.name}</p>
                    <button>edit</button>
                    <button onClick={() => dispatch(deleteUser(item.id))}>delete</button>
                   </div>
                ))}
            </div>
        </div>
    );
};



export default User;