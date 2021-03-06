import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: ${props => props.type.toLowerCase() === 'success' ? '#5C9210' : '#944317'};

  /* :first-of-type {
    margin-left: 0;
    padding-left: 0;
  } */

  :disabled {
    color: #CCC;
    cursor: not-allowed;
  }
`;
