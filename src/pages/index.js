import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Layout,
  Hero,
  About,
  Jobs,
  Education,
  // Featured,
  Projects /*, Contact*/,
} from '@components';

const StyledMainContainer = styled.main`
  display: flex;
  min-height: 100vh;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledHeroColumn = styled.div`
  position: fixed;
  left: 4%;
  top: -50px;
  width: 38%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 15px 0 0;
  z-index: 1;

  @media (max-width: 1200px) {
    position: static;
    width: 100%;
    height: auto;
    min-height: 60vh;
    padding: 120px 50px 40px;

    /* Ocultar la foto en móvil ya que aparece en el contenido */
    > div:last-child {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 25px 40px;
  }
`;

const StyledContentColumn = styled.div`
  counter-reset: section;
  margin-left: 43%;
  width: 56%;
  min-height: 100vh;
  padding: 40px 5px 100px 40px;

  .mobile-picture {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-left: 0;
    width: 100%;
    padding: 40px 50px 100px;

    .mobile-picture {
      display: block;
    }
  }

  @media (max-width: 480px) {
    padding: 40px 25px 100px;
  }
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <StyledHeroColumn>
        <Hero />
      </StyledHeroColumn>
      <StyledContentColumn>
        <About />
        <Jobs />
        <Education />
        {/* <Featured /> */}
        <Projects />
        {/* <Contact /> */}
      </StyledContentColumn>
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
