// src/styles/Button.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;
