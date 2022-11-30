
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { addNewUser, fetchUsers } from './UserListSlice';
const UserList = () => {

    const userList = useSelector((state) => state.userList.users)
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    useEffect(() => {
    dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        dispatch(
            addNewUser({
            id: uuidv4(),
            name: inputValue,
          })
        );
      };
    return (
        <div>
            <input value={inputValue} onChange={handleChange}></input>
            <button onClick={handleAddUser}>add</button>

            <div>
                {userList.map((user) => (
                    <p>{user.name}</p>
                ))}
            </div>
        </div>
    );
};

export default UserList;