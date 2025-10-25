import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledPicture = styled.div`
  max-width: 280px;
  width: 80%;
  margin-top: 2.5rem;

  @media (max-width: 1200px) {
    max-width: 250px;
    width: 75%;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (max-width: 768px) {
    margin-top: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    position: relative;
    width: 70%;
    max-width: 300px;
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
