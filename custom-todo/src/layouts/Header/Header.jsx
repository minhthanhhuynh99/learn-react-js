import React from 'react';
import './Header.scss'
import TodoList from '../../components/TodoList';
const Header = () => {
    return (
        <>
            <h3>Todo-List</h3>
            <div className='containerHeader'>
                <TodoList />
            </div>
        </>
    );
};

export default Header;