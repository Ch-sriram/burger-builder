import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: ${props => props.color.toLowerCase() === 'success' ? '#5C9210' : '#944317'};

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;
