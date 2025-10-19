import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledPicture = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 280px;
  width: 80%;

  @media (max-width: 1200px) {
    max-width: 250px;
    width: 75%;
    bottom: 25%;
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 0 auto 30px;
    width: 70%;
    max-width: 300px;
    transform: none;
    left: auto;
    bottom: auto;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const ProfilePicture = () => (
  <StyledPicture>
    <div className="wrapper">
      <StaticImage
        className="img"
        src="../images/me.jpg"
        width={500}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Headshot"
      />
    </div>
  </StyledPicture>
);

export default ProfilePicture;
