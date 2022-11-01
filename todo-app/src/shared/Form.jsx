import React from 'react';
import { useState } from 'react';
import '../styles/Form.css'
import PropTypes from 'prop-types';
import InputText from '../components/InputText'
import Button from '../components/Button'
import Body from '../layouts/Body';


import '../styles/Form.css'

Form.propTypes = {
    
};

function Form( { formClass, handleSubmit } )  {
    const [title , setTitle] = useState('');
    const [creator , setCreator] = useState('');
    const [description, setDescription] = useState('');
     
    return (
        <form className={`formClassContainer ${formClass}`} onSubmit={handleSubmit}>
            <InputText label={'Title'} placeholder={'Type title'} name={'title'} value={title} onChange={(e) => setTitle(e.target.value)}/>
            <InputText label={'Creator'} placeholder={'Name of Creator'} name={'creator'} value={creator} onChange={(e) => setCreator(e.target.value)}/>
            <InputText label={'Description'} placeholder={'Description Details'} name={'description'} value={description} onChange={(e) => setDescription(e.target.value)}/>

            <div>
                <Button title={"Save"} type={'submit'} />
            </div>
        </form>
    );
}

export default Form;