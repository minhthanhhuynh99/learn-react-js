import React from 'react';
import InputText from '../common/InputText';
import Button from '../common/Button';

const SearchForm = (props) => {
  const onClickBtn = () =>{
    
  }
  return (
    <div>
      <InputText />
      <Button name="Search"
       onClickButton={onClickBtn}
      />
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;