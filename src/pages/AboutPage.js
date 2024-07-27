import React from 'react';
import styled from 'styled-components';

const AboutPageWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <h1>About Story Builder</h1>
      <p>Story Builder is a platform for collaborative storytelling.</p>
      <h2>About the Developer</h2>
      <p>My name is Chandrasekar Sharushan, and I am a final year student at LMU, pursuing BEng (Hons) Software Engineering - Top-up.</p>
      <p>Student ID: E225128</p>
      <h2>Final Year Project</h2>
      <p>The title of my final year project is "Interactive and Collaborative Story Crafting."</p>
      <p>This project aims to create an engaging platform that allows users to collaboratively craft stories, enhancing creativity and teamwork.</p>
    </AboutPageWrapper>
  );
};

export default AboutPage;
