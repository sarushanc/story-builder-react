// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginPageWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const FormWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <h1>Login</h1>
      <FormWrapper>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
      </FormWrapper>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </LoginPageWrapper>
  );
};

export default LoginPage;
