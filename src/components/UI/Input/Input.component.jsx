// LIBRARY IMPORTS
import React from 'react';
import styled from 'styled-components';

// for <Input />, <TextArea /> & <Select />
const commonInputStyle = `
  outline: none;
  border: 1px solid #CCC;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #CCC;
  }
`;


// STYLED COMPONENTS
const InputDiv = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`${commonInputStyle}`;
const TextArea = styled.textarea`${commonInputStyle}`;
const Select = styled.select`${commonInputStyle}`;

const input = props => {
  let inputElement = null;
  switch (props.elementType) {
    case 'textarea':
      inputElement = <TextArea {...props.elementConfig} value={props.value} onChange={props.changed}/>;
      break;
    
    case 'select':
      inputElement = (
        <Select value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option =>
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          )}
        </Select>
      );
      break;
      
    case 'input':
    default:
      inputElement = <Input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
  }

  return (
    <InputDiv>
      <Label>{props.label}</Label>
      {inputElement}
    </InputDiv>
  )
};

export default input;
