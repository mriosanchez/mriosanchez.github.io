import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  padding: 100px 0;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 80px 0;
    max-width: 100%;
  }
`;

const StyledContent = styled.div`
  padding: 0 100px;
  @media (max-width: 768px) {
    padding: 0 =50px;
  }
  @media (max-width: 480px) {
    padding: 0 40px;
  }
`;

const StyledTitle = styled.h1`
  font-size: clamp(34px, 6vw, 50px);
  font-weight: 600;
  margin: 0 0 20px 0;
  color: var(--lightest-slate);
  text-align: left;
  line-height: 1.1;
`;

const StyledSection = styled.section`
  margin: 60px 0;
  h2 {
    font-size: clamp(24px, 4vw, 32px);
    color: var(--lightest-slate);
    margin: 50px 0 25px 0;
    font-weight: 500;
  }
  h3 {
    font-size: clamp(20px, 3vw, 24px);
    color: var(--green);
    margin: 40px 0 20px 0;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    color: var(--light-slate);
    line-height: 1.7;
    margin: 0 0 25px 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 40px 0;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.7);
  }
  transition: all 0.3s ease;
`;

const StyledSpecs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 35px 0 0 0; /* Reduced bottom margin to 0px for minimal space */
  padding: 0;
  background: none;
  gap: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  .spec-item {
    text-align: left;
    h4 {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: 12px;
      margin: 0 0 4px 0;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    p {
      color: var(--lightest-slate);
      font-size: 18px;
      font-weight: 500;
      margin: 0;
    }
  }
`;

const MaisotsenkoCyclePage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer>
      <StyledContent>
        <StyledTitle>Maisotsenko Cycle Hybrid Heat Pump Thesis</StyledTitle>
        <StyledSpecs>
          <div className="spec-item">
            <h4>Project Type</h4>
            <p>Bachelor Thesis</p>
          </div>
          <div className="spec-item">
            <h4>Focus</h4>
            <p>Energy Efficiency</p>
          </div>
          <div className="spec-item">
            <h4>Location</h4>
            <p>Alicante, Spain</p>
          </div>
          <div className="spec-item">
            <h4>Key Result</h4>
            <p>15% Energy Savings</p>
          </div>
        </StyledSpecs>
        <StyledSection>
          <p style={{ marginTop: '-100px' }}>
            <StyledImage src="/images/maisotsenko/SlidesCycleM_page-0003.jpg" alt="Title Slide" />
            The goal of this project is to make air conditioning systems more efficient and
            sustainable, helping to reduce energy use and emissions in buildings.{' '}
            <b>Buildings account for over 40% of energy use in the EU</b>, and a large part of this
            is due to heating and cooling. Improving these systems is essential for meeting climate
            goals.
          </p>
          <p>
            <StyledImage src="/images/maisotsenko/SlidesCycleM_page-0004.jpg" alt="ODS Slide" />
            The European Union has set ambitious targets for reducing energy consumption and
            greenhouse gas emissions by 2030 and 2050.{' '}
            <b>Climate change is making summers hotter and longer</b>, increasing the demand for air
            conditioning, especially in southern Europe.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0005.jpg"
              alt="Building Energy Slide"
            />
            In countries like Spain, Italy, and Portugal, cooling can represent up to 50% of a
            building's energy use. <b>Most of these emissions are indirect</b>, coming from the
            electricity and heat used in buildings. This makes it crucial to find new ways to cool
            buildings more efficiently.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0006.jpg"
              alt="Evaporative Cooling Slide"
            />
            One promising technique is <b>evaporative cooling</b>, which uses the evaporation of
            water to cool air. This method is energy efficient, but it can increase humidity. The
            Maisotsenko Cycle (M-Cycle) is a special type of indirect evaporative cooling that can
            cool air without adding as much humidity.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0007.jpg"
              alt="Maisotsenko Cycle Slide"
            />
            <b>The M-Cycle can cool air down to its dew point</b>, which is even lower than the
            wet-bulb temperature reached by other evaporative methods. This makes it highly
            efficient and suitable for use in air conditioning systems.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0008.jpg"
              alt="Objectives Slide"
            />
            The main innovation in this project is to use the M-Cycle to{' '}
            <b>pre-cool the air entering the heat pump's condenser</b>, instead of using it to
            directly cool the building. This approach aims to boost the efficiency of the heat pump
            and reduce overall energy use.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0009.jpg"
              alt="Modeling Slide"
            />
            To study this, I developed mathematical models for the M-Cycle, the heat pump, and the
            building. The M-Cycle model uses energy and mass balances to predict how air and water
            interact inside the system. The heat pump's efficiency is modeled based on temperature
            and system parameters, using real data from an office building in Alicante, Spain.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0010.jpg"
              alt="M-Cycle Model Slide"
            />
            The M-Cycle model considers heat and mass transfer, and assumes no heat loss to the
            environment. It uses specific parameters for channel size, air velocity, and water flow,
            based on literature and experiments.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0011.jpg"
              alt="M-Cycle Parameters Slide"
            />
            The system is simulated using real climate data for Alicante, focusing on the summer
            months. This ensures the results are realistic and relevant for hot climates.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0012.jpg"
              alt="Heat Pump Model Slide"
            />
            The heat pump's performance is validated with experimental data, confirming the accuracy
            of the model for predicting energy use. The building model is also validated, showing
            good agreement with real measurements for cooling demand.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0013.jpg"
              alt="Climate Data Slide"
            />
            <b>All models are tested together</b> to see how the hybrid system would work in
            practice. The results show that pre-cooling the condenser air with the M-Cycle reduces
            the compressor's power needs, especially during the hottest hours of the day. The
            system's efficiency (EER) increases significantly.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0014.jpg"
              alt="Validation Slide"
            />
            <b>Key results:</b> Annual compressor energy use drops by 15%, and average EER increases
            by 13%. Water use is 9,855 m³ per year. The system is economically viable for 178 hours
            of summer operation, when the cost of saved electricity is greater than the cost of
            water.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0015.jpg"
              alt="HP Validation Slide"
            />
            Different control strategies were tested to optimize when the M-Cycle operates,
            balancing energy savings and water use. The best strategies maximize savings with
            reasonable water consumption.
          </p>
          <p>
            <StyledImage
              src="/images/maisotsenko/SlidesCycleM_page-0020.jpg"
              alt="Building Validation Slide"
            />
            <b>In summary:</b> Using the M-Cycle to pre-cool condenser air improves heat pump
            efficiency by up to 17% annually. The system is sustainable, but water use must be
            managed. This approach is especially promising for hot climates where air conditioning
            demand is high.
          </p>
          <p>For more details, you can download the full thesis below.</p>
          <p>
            <a
              href="/images/maisotsenko/ThesisCycleM.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <b>Download the full thesis (PDF)</b>
            </a>
          </p>
        </StyledSection>
      </StyledContent>
    </StyledMainContainer>
  </Layout>
);

MaisotsenkoCyclePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MaisotsenkoCyclePage;
