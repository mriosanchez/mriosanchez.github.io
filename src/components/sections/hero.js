import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 0 0 150px;
  transform: translateY(-15%);

  @media (max-width: 1200px) {
    padding: 0 0 0 100px;
    transform: translateY(-15%);
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 60vh;
    height: auto;
    padding: 0 0 24px 0;
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
      font-size: clamp(50px, 7vw, 60px);
    }
  }

  h3 {
    margin-top: 5px;
    margin-bottom: 20px;
    line-height: 1.1;
    font-weight: 400;
    font-size: clamp(22px, 2.5vw, 30px);
    color: var(--slate);

    @media (max-width: 768px) {
      font-size: clamp(28px, 5vw, 35px);
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
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  // const one = <h1>Hi, my name is</h1>;
  const two = <h2>Mario Sánchez</h2>;
  const three = <h3>Mechanical Engineer </h3>;
  const four = (
    <>
      <p>
        I love designing, building &amp; fixing things. I'm currently focused on data science and
        predictive maintenance at{' '}
        <a href="https://www.airbus.com" target="_blank" rel="noreferrer">
          Airbus
        </a>
        .
      </p>
    </>
  );
  // const five = (
  //   <a className="email-link" href="/404" target="_blank" rel="noreferrer">
  //     Check out my blog!
  //   </a>
  // );

  const items = [two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
