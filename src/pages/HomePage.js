import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import ButtonGroup from '../styles/ButtonGroup';
import storyMobileImage from '../images/storymobile.png';

const HomePageWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TextSection = styled.div`
  width: 50%;
  text-align: left;
`;

const ImageSection = styled.div`
  width: 30%;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <h1>Welcome to Story Builder</h1>
      <ContentWrapper>
        <TextSection>
          <h2>New Story</h2>
          <p>Combining storytelling and visual aids to enhance your storytelling skills. Strive for excellence.</p>
          <ButtonGroup>
            <Button to="/register">Join Now</Button>
            <Button to="/login">Log In</Button>
          </ButtonGroup>
        </TextSection>
        <TextSection>
          <h2>Existing Stories</h2>
          <p>Engage in reading stories to enhance your creativity, or assist others in completing their narratives to showcase your storytelling skills and share your talent with the world.</p>
        </TextSection>
        <ImageSection>
          <img src={storyMobileImage} alt="Example" />
        </ImageSection>
      </ContentWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
