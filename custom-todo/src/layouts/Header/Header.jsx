import React from 'react';
import './Header.scss'
import TodoList from '../../components/TodoList';
const Header = () => {
    return (
        <>
            <div className='containerHeader'>
                <TodoList />
            </div>
        </>
    );
};

export default Header;