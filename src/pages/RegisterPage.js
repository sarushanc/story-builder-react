// src/pages/RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterPageWrapper = styled.div`
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

const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <h1>Register</h1>
      <FormWrapper>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Register</Button>
      </FormWrapper>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
