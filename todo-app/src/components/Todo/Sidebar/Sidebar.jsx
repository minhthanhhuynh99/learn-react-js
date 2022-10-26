import React from 'react';
import PropTypes from 'prop-types';
import "./Sidebar.css"

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    return (
        <div className="containerSidebar">
            <div className="containerSidebar__item">
                <p>All Task</p>
            </div>
            <div className="containerSidebar__item">
                <p>New Task</p>
            </div>
            <div className="containerSidebar__item">
                <p>Doing Task</p>
            </div>
            <div className="containerSidebar__item">
                <p>Done Tasks</p>
            </div>
        </div>
    );
}

export default Sidebar;