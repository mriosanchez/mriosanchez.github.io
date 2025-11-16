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
    padding: 0 50px;
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
    color: var(--white);
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
            <h4>Weight</h4>
            <p>4,2 kg</p>
          </div>
          <div className="spec-item">
            <h4>Load</h4>
            <p>1,156 kg</p>
          </div>
          <div className="spec-item">
            <h4>Strength Ratio</h4>
            <p>275:1</p>
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

        <StyledSection style={{ marginTop: '0px' }}>
          <p>
            During our mechanical engineering studies at Universidad Miguel Hernández (UMH), we took
            on a challenge that at first looked simple: build a bridge using only popsicle sticks
            and white glue, with a maximum total weight of 4.2 kg. The goal was to support as much
            load as possible, so every gram and every connection mattered.
          </p>
          <p>
            The competition rules forced us to think like real engineers. The bridge had to span 80
            cm, maintain a minimum height of 45 cm, and use only the approved materials. Because of
            that, our main focus quickly became how to get the best strength-to-weight ratio without
            over-building the structure.
          </p>

          <StyledImage
            src="/images/bridge/bridge2.png"
            alt="Competition weight placement demonstration"
          />

          <p style={{ marginTop: '40px' }}>
            We started by reviewing past designs and comparing different truss systems to understand
            how load paths would behave. Since we couldn’t test the real bridge early on, we looked
            for small ways to validate our ideas.
          </p>
          <p>
            One of those ideas was a simple experiment at home: hanging cans from a string between
            two points to imitate the way loads would be applied. It wasn’t fancy, but it helped us
            visualize how forces moved through the structure and confirmed where reinforcement would
            actually be useful.
          </p>

          <StyledImage
            src="/images/bridge/bridge4.jpg"
            alt="Load distribution experiment setup in bathroom"
          />

          <p style={{ marginTop: '40px' }}>
            Once we felt confident with the concept, we drew a little idea of the bridge in AutoCAD.
            This allowed us to fix dimensions, angles, and more or less the position of sticks
            before touching any materials. The drawing also became our physical template during
            construction, which saved us from small alignment errors that could later weaken the
            structure.
          </p>

          <StyledImage
            src="/images/bridge/bridge3.jpg"
            alt="AutoCAD technical drawing of bridge design"
          />

          <h2>Construction Process</h2>
          <p>
            One of the first practical lessons we learned was how much surface preparation affects
            joint strength. By sanding the sticks lightly, the glue had more surface area to grab
            onto. White glue works through mechanical adhesion, so even a bit of roughness made a
            noticeable difference in the stiffness of our joints. This step may seem minor, but on
            top on other optimizations, it contributed to the overall performance of the bridge.
          </p>

          <h3>Arch Construction</h3>
          <p>
            The bridge was built around two main arches joined by a series of bracing elements. To
            keep both arches identical, we drew the shape on kraft paper and used it as a guide. We
            built the first layer slowly, making several small adjustments until the arches matched
            the geometry we needed.
          </p>

          <StyledImage
            src="/images/bridge/Bridge5.jpg"
            alt="Initial arch construction showing first layer placement"
          />

          <p>
            We were struggling to find the right position for the sticks to achieve the right
            dimensions without weaknesses. After several attempts, we realized that clamping the
            sticks to the paper template using watered glue helped hold everything in place, and
            suddenly, the bridge started to take shape.
          </p>

          <StyledImage
            src="/images/bridge/Bridge6.jpg"
            alt="Completed first layer of arch construction"
          />

          <p style={{ marginBottom: '0px', marginTop: '0px' }}>
            Once the first layer was solid, we continued adding material gradually, always checking
            curvature, alignment, and stiffness as we went.
          </p>
          <StyledImage
            src="/images/bridge/bridge7.jpg"
            alt="Refined arch after multiple iterations"
          />

          <p style={{ marginTop: '40px' }}>
            Each arch ended up with 8 layers of sticks. We didn’t just stack them. Each layer had a
            purpose.
          </p>
          <p>
            <strong>Layer Type 1a & 1b:</strong> These layers added triangulation to control
            deformation. Alternating them changed the direction of the fibers at the joints, which
            helped distribute the load more evenly and reduced the risk of weak points.
          </p>
          <p>
            <strong>Layer Type 2:</strong> These were simple layers without triangulation. They kept
            weight low while giving the arch its basic shape.
          </p>

          <p style={{ marginBottom: '0px' }}>
            The final sequence [ 1a → 2 → 1b → 2 → 1a → 2 → 1b → 2 ] gave us a structure that was
            strong while still staying inside the weight limit.
          </p>

          <StyledImage
            src="/images/bridge/bridge 8.jpg"
            alt="Layer distribution pattern - Type 1a"
          />

          <p style={{ marginBottom: '0px' }}>
            Why we were doing this? By alternating the layer types, we ensured that no single joint
            had all sticks aligned in the same direction so that the load would be shared more
            effectively across the structure.
          </p>

          <StyledImage src="/images/bridge/bridge9.jpg" alt="Layer distribution pattern - Type 2" />

          <StyledImage
            src="/images/bridge/bridge11.jpg"
            alt="Complete layering system visualization"
          />

          <h3>St. Andrew's crosses</h3>
          <p>
            To stabilize the bridge laterally, we added St. Andrew’s crosses between the arches.
            Furthermore, we had to ensure that the diagonals were not touching each other.
          </p>
          <p>
            But why? Because this allows each diagonal to work mainly in tension, where wood behaves
            much better. If they were connected, they would share compression loads, and the sticks
            could buckle easily. By leaving a small gap, the diagonals can rotate slightly under
            compression but remain very effective when they are in tension.
          </p>

          <StyledImage
            src="/images/bridge/bridge12.jpg"
            alt="St. Andrew's cross construction - perspective view"
          />
          <StyledImage
            src="/images/bridge/bridge13.jpg"
            alt="St. Andrew's cross installation progress"
          />

          <p style={{ marginBottom: '0px' }}>This is how we made the wooden joints.</p>

          <StyledImage
            src="/images/bridge/bridge17.jpg"
            alt="Detail of cross connection method to arches"
          />
          <p style={{ marginBottom: '0px' }}>Work almost done!</p>
          <StyledImage src="/images/bridge/bridge14.jpg" alt="Nearly completed bridge structure" />

          <h3>Base Mounting and load test</h3>
          <p>
            After finishing the bridge, we glued it to the plywood base. To make sure it cured
            properly, we placed about 50 kg of water bottles on top of the arches for a full day.
            The connection to the base needed to be reliable since any slipping would invalidate the
            test.
          </p>

          <StyledImage
            src="/images/bridge/bridge15.jpg"
            alt="Bridge curing under 50kg water bottle weight"
          />

          <h3>Weight Verification</h3>
          <p>
            When everything was dry, we checked the final mass: 4.15 kg. That was almost the upper
            limit of the competition, so we used every gram carefully
          </p>

          <StyledImage
            src="/images/bridge/bridge16.jpg"
            alt="Final bridge weighing exactly 4.2kg"
          />

          <h2>Competition Results</h2>
          <p>
            During the load test, the bridge held 1,156 kg before failing. With a weight of 4.15 kg,
            this gave us a strength-to-weight ratio of 275:1. The weights were added in 28 kg
            blocks, starting with a 20 kg test block.
          </p>

          <StyledImage
            src="/images/bridge/bridge18.jpg"
            alt="Bridge supporting 1156kg during final test"
          />

          <p>
            Looking back, the project was a good example of what we had been learning throughout the
            degree. load paths, materials behavior, joint design, and the value of validating ideas
            with small experiments. It wasn’t perfect, and we faced plenty of small setbacks while
            building, but those challenges were exactly what helped us understand how theory becomes
            real engineering.
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
