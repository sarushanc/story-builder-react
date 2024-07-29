import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonGroup = ({ children }) => {
  return <ButtonGroupWrapper>{children}</ButtonGroupWrapper>;
};

export default ButtonGroup;
