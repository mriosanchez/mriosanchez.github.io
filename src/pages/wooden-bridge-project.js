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
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
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
  margin: 35px 0 40px 0;
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

const WoodenBridgeProjectPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer>
      <StyledContent>
        <StyledTitle>Wooden Bridge Competition</StyledTitle>

        <StyledSpecs>
          <div className="spec-item">
            <h4>Final Weight</h4>
            <p>4.2 kg</p>
          </div>
          <div className="spec-item">
            <h4>Load Capacity</h4>
            <p>1,156 kg</p>
          </div>
          <div className="spec-item">
            <h4>Strength Ratio</h4>
            <p>275:1</p>
          </div>
          <div className="spec-item">
            <h4>Team Size</h4>
            <p>5 </p>
          </div>
          <div className="spec-item">
            <h4>Materials</h4>
            <p>Sticks & Glue</p>
          </div>
        </StyledSpecs>

        <StyledImage
          src="/images/bridge/bridge18.jpg"
          alt="Bridge supporting 1156kg during final test"
        />

        <StyledSection style={{ marginTop: '30px' }}>
          <h2>The Challenge</h2>
          <p>
            As mechanical engineering students at Universidad Miguel Hernández (UMH), we faced an
            exciting structural engineering challenge: design and build a bridge using only popsicle
            sticks and white glue that could support maximum weight while staying under 4.2kg total
            mass.
          </p>
          <p>
            The competition had strict requirements: the bridge needed to span 80cm with a minimum
            clearance of 45cm height, support standardized weights, and be constructed using only
            approved materials. The real challenge was optimizing the strength-to-weight ratio
            within these constraints.
          </p>

          <StyledImage
            src="/images/bridge/bridge2.png"
            alt="Competition weight placement demonstration"
          />

          <h2>Research and Initial Design</h2>
          <p>
            Our team of five engineers started by researching previous competition winners and
            analyzing different truss configurations. We needed to understand how loads would
            distribute through our structure and identify the most efficient geometric patterns.
          </p>
          <p>
            To validate our load distribution hypothesis, we conducted a creative experiment in my
            bathroom. We simulated the bridge loading by hanging cans from a string attached to two
            points, recreating the exact force distribution we expected during testing. This simple
            but effective method helped us visualize stress patterns before construction.
          </p>

          <StyledImage
            src="/images/bridge/bridge4.jpg"
            alt="Load distribution experiment setup in bathroom"
          />

          <h3>CAD Design and Planning</h3>
          <p>
            Using AutoCAD, we created a precise technical drawing that defined our bridge's geometry
            and popsicle stick placement. This blueprint became our construction template, ensuring
            accuracy and consistency throughout the build process.
          </p>

          <StyledImage
            src="/images/bridge/bridge3.jpg"
            alt="AutoCAD technical drawing of bridge design"
          />

          <h2>Construction Process</h2>

          <h3>Material Preparation: The Science of Adhesion</h3>
          <p>
            A critical discovery in our process was the importance of surface preparation. We
            learned that sanding the popsicle sticks creates microscopic roughness that dramatically
            improves white glue adhesion. White glue works through mechanical adhesion - it
            penetrates surface irregularities and creates friction between the roughened wood
            surfaces when cured.
          </p>
          <p>
            This seemingly minor detail significantly increased our joint strength, as the
            mechanical interlocking provided by the roughened surfaces supplements the chemical
            bonding of the adhesive.
          </p>

          <h3>Arch Construction</h3>
          <p>
            Our bridge consists of two main arches connected by St. Andrew's crosses. We started by
            constructing each arch using a carefully planned layering system painted on kraft paper
            as our template.
          </p>

          <StyledImage
            src="/images/bridge/Bridge5.jpg"
            alt="Initial arch construction showing first layer placement"
          />

          <p>
            The first layer established our basic arch geometry, followed by iterative refinement
            through trial and error to achieve optimal curvature and structural integrity.
          </p>

          <StyledImage
            src="/images/bridge/Bridge6.jpg"
            alt="Completed first layer of arch construction"
          />
          <StyledImage
            src="/images/bridge/bridge7.jpg"
            alt="Refined arch after multiple iterations"
          />

          <h3>Advanced Layering Strategy</h3>
          <p>
            Each arch incorporates 8 strategically distributed layers designed to handle different
            types of structural loads:
          </p>
          <p>
            <strong>Layer Type 1:</strong> Simple interior and exterior arcs without triangulation -
            optimized for weight reduction while maintaining basic structural form.
          </p>
          <p>
            <strong>Layer Type 2a & 2b:</strong> Triangulated reinforcement layers that prevent
            deformation in the XZ plane. The alternating patterns (2a vs 2b) ensure that fiber
            direction changes at connection nodes, eliminating weak points and distributing stress
            more effectively.
          </p>
          <p>
            Our layering sequence: 2a → 1 → 2b → 1 → 2a → 1 → 2b → 1, creates a composite structure
            that balances strength with weight efficiency.
          </p>

          <StyledImage
            src="/images/bridge/bridge 8.jpg"
            alt="Layer distribution pattern - Type 2a"
          />
          <StyledImage src="/images/bridge/bridge9.jpg" alt="Layer distribution pattern - Type 1" />
          <StyledImage
            src="/images/bridge/bridge10.jpg"
            alt="Layer distribution pattern - Type 2b"
          />
          <StyledImage
            src="/images/bridge/bridge11.jpg"
            alt="Complete layering system visualization"
          />

          <h3>St. Andrew's Cross Innovation</h3>
          <p>
            The lateral stability system uses St. Andrew's crosses to prevent buckling in the YZ
            plane. Our innovative approach includes a crucial design feature: the cross members
            don't connect at their intersection point.
          </p>
          <p>
            This deliberate disconnection allows each diagonal member to work primarily in tension
            while avoiding compression failure. When compressed, the members can rotate slightly
            without bearing load, but when tensioned, they provide excellent structural resistance.
            Since wood performs better under tension than compression, this design optimizes
            material properties.
          </p>

          <StyledImage
            src="/images/bridge/bridge12.jpg"
            alt="St. Andrew's cross construction - perspective view"
          />
          <StyledImage
            src="/images/bridge/bridge13.jpg"
            alt="St. Andrew's cross installation progress"
          />

          <p>
            The crosses attach to the arches externally, extending beyond the arch perimeter before
            connecting, ensuring they work in tension as intended.
          </p>

          <StyledImage
            src="/images/bridge/bridge17.jpg"
            alt="Detail of cross connection method to arches"
          />
          <StyledImage src="/images/bridge/bridge14.jpg" alt="Nearly completed bridge structure" />

          <h2>Final Assembly and Testing</h2>

          <h3>Base Mounting</h3>
          <p>
            The final critical step involved permanently mounting the bridge to its plywood base. We
            applied white glue to the support points and used 50kg of water bottles as dead weight
            to ensure proper adhesion during the 24-hour curing period.
          </p>

          <StyledImage
            src="/images/bridge/bridge15.jpg"
            alt="Bridge curing under 50kg water bottle weight"
          />

          <h3>Weight Verification</h3>
          <p>
            After curing, our completed bridge weighed exactly 4.2kg - meeting the competition's
            maximum weight requirement with precision.
          </p>

          <StyledImage
            src="/images/bridge/bridge16.jpg"
            alt="Final bridge weighing exactly 4.2kg"
          />

          <h2>Competition Results</h2>
          <p>
            During the competition, our bridge successfully supported 1,156kg before failure,
            achieving a remarkable strength-to-weight ratio of 275:1. Each standard weight was 28kg,
            with the initial test weight being 20kg.
          </p>

          <StyledImage
            src="/images/bridge/bridge18.jpg"
            alt="Bridge supporting 1156kg during final test"
          />

          <p>
            This project demonstrated the power of combining theoretical engineering principles with
            hands-on experimentation, careful material preparation, and innovative structural
            design. The success came from understanding material properties, optimizing geometry,
            and implementing creative solutions to complex engineering challenges.
          </p>
        </StyledSection>
      </StyledContent>
    </StyledMainContainer>
  </Layout>
);

WoodenBridgeProjectPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default WoodenBridgeProjectPage;
