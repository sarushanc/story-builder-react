import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      &copy; 2024 Story Builder. All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
