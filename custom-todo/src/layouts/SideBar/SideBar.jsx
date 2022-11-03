import React from 'react';
import './SideBar.scss'
const SideBar = () => {
    return (
        <div className='containerSide'>
            <ul>
                <li>All Task</li>
                <li>New Task</li>
                <li>Doing Task</li>
                <li>Done Task</li>
            </ul>
        </div>
    );
};

export default SideBar;