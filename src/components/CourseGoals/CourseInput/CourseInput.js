import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if((event.target.value.trim()).length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const FormControls = styled.div`
    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
  
  &.invalid input{
    background-color: #ffd7d7;
    border-color: red;
  }
  
  &.invalid label{
    color: red
  }
  `;

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControls className={`${!isValid? 'invalid' : ''}`}>
      {/* <div className= {`form-control ${!isValid ? 'invalid' : ''}`}> */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      {/* </div> */}
      </FormControls>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
