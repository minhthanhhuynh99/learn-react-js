import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTaskPopup = ( {modal ,toggle ,save} ) => {
    const [taskName, setTaskName] = useState('');
    const [creator, setCreator] = useState('');
    const [description, setDescription] = useState('')


    const handleChange = (e) => {
        const {name,value} =e.target
        if ( name === 'taskName') {
            setTaskName(value)
        }
        if ( name === 'Creator') {
            setCreator(value)
        }
        if ( name === 'Description') {
            setDescription(value)
        }
    }

    const handleSave = () => {
        let taskObj ={};
        taskObj['Name'] = taskName
        taskObj['Creator'] = creator
        taskObj['Description'] = description
        save(taskObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} className="text-warning">Create New Tasks</ModalHeader>
                <form action="" >
                    <div className='form-group'>
                        <label htmlFor="">Title</label>
                        <input type="text"  className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Creator</label>
                        <input type="text" className='form-control' value={creator}  onChange={handleChange} name='Creator'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description</label>
                        <textarea  id="" cols="30" rows="3" className='form-control' value={description} onChange={handleChange} name='Description'/>
                    </div>
                    <div className='form-group'>

                    </div>
                </form>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create Tasks</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;