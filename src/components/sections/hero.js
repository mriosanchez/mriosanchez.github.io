import React from 'react';
import ProfilePicture from '@components/profilePicture';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* Margen lateral izquierdo fluido: 220px en 1920px, 132px (60%) en 1200px, y menor en pantallas más pequeñas */

  padding: clamp(300px, 18vh, 224px) clamp(12px, calc(2vw + 12px), 50px) clamp(32px, 8vh, 96px)
    clamp(32px, calc(8vw + 36px), 220px);
  transform: translateY(-15%);

  @media (max-width: 1200px) {
    padding: 0 12px 0 0;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: auto;
    height: auto;
    transform: none;
  }

  @media (max-height: 700px) and (min-width: 768px) {
    transform: translateY(-10%);
  }

  h1 {
    margin: 0 0 30px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
      margin: 0 0 20px 5px;
    }
  }

  /* make the main name a bit smaller */
  h2 {
    margin: 0;
    font-size: clamp(40px, 4vw, 50px);
    line-height: 1.05;

    @media (max-width: 768px) {
      font-size: clamp(40px, 5.6vw, 48px);
    }
  }

  h3 {
    margin-top: 5px;
    margin-bottom: 20px;
    line-height: 1.1;
    font-weight: 400;
    font-size: clamp(18px, 2vw, 26px);

    @media (max-width: 768px) {
      font-size: clamp(22px, 4vw, 28px);
    }
  }

  h4 {
    margin-top: 0px;
    line-height: 0.9;
    font-weight: 400;
  }

  p {
    margin: 0 0 15px 0;
    max-width: 100%;
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 768px) {
      max-width: 540px;
      font-size: var(--fz-lg);
    }

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const items = [
    <h2 key="name">Mario Sánchez</h2>,
    <h3 key="title">Mechanical Engineer </h3>,
    <p key="description">
      I love designing, building &amp; fixing things. I'm currently focused on data science and
      predictive maintenance at{' '}
      <a href="https://www.airbus.com" target="_blank" rel="noreferrer">
        Airbus
      </a>
      .
    </p>,
  ];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
      <ProfilePicture />
    </StyledHeroSection>
  );
};

export default Hero;
