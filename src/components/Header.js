// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: #e0f2ff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

const ProfileIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuButton>☰</MenuButton>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
      <ProfileIcon>👤</ProfileIcon>
    </HeaderWrapper>
  );
};

export default Header;
