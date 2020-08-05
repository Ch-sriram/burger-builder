import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;
  }
`;

const wrapper = props => (
  <Wrapper>{props.children}</Wrapper>
);

export default wrapper;
