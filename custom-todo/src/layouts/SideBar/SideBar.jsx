import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss'
const SideBar = () => {
    return (
        <div className='containerSide'>
            <ul>
                <li>
                    <Link to='/Home'>All Task</Link>
                </li>
                <li>
                    <Link to='/new-task'>New Task</Link>
                </li>
                <li>
                    <Link to='/doing-task'>Doing Task</Link>
                </li>
                <li>
                    <Link to='/done-task'>Done Task</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;