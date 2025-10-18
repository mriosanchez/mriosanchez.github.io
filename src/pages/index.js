import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledHeroColumn = styled.div`
  position: fixed;
  left: 5%;
  top: 0;
  width: 28%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  z-index: 1;

  @media (max-width: 1200px) {
    left: 3%;
    width: 32%;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: auto;
    min-height: 60vh;
    padding: var(--nav-height) 50px 40px;
  }

  @media (max-width: 480px) {
    padding: var(--nav-height) 25px 40px;
  }
`;

const StyledContentColumn = styled.div`
  margin-left: 35%;
  width: 65%;
  min-height: 100vh;
  padding: var(--nav-height) 40px 100px 80px;

  @media (max-width: 1200px) {
    margin-left: 37%;
    width: 63%;
    padding: var(--nav-height) 40px 100px 60px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 40px 50px 100px;
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
        <Featured />
        <Projects />
        <Contact />
      </StyledContentColumn>
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
