import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;
  margin-top: -100px;

  .inner {
    display: block;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const skills = [
    'Python',
    'HTML',
    'AI',
    'Matlab',
    'Simulink',
    'SAP',
    'ESS',
    'AutoCAD',
    'Inventor',
    'SolidWorks',
    'Gsuite',
    'Office 365',
  ];

  return (
    <StyledAboutSection id="about">
      {/* <h2 className="numbered-heading">About Me</h2> */}

      <div className="inner">
        <StyledText>
          <div>
            <p>
              <span>
                Hello! My name is Mario and I enjoy crafting things out of nowhere and solving
                problems. When I was a child I used to follow my dad around his workshop, fixing
                broken things at home and making my own toys using scrap materials. I’ve always been
                curious about how things work. Physics, maths, computer science, nutrition and
                engineering have always caught my attention, and I try to learn something new about
                them every day.
              </span>
            </p>
            <p>
              During my studies in{' '}
              <a href="https://mecanica.umh.es/" target="_blank" rel="noreferrer">
                Mechanical Engineering
              </a>
              , between exams and projects, I learned about thermodynamics, structural analysis,
              fluid mechanics, and programming. I collaborated with my friends to design &amp; build
              a <a href="/wooden-bridge-project">bridge</a> using only ice cream sticks and glue.
              Later, I joined the Airbus Discover Program, a master's that combines work experience
              at Airbus with training in data analysis, business management, and soft skills.
            </p>
            <p>
              Fast-forward to today, I’ve had the privilege of working at a{' '}
              <a href="https://www.airbus.com">huge corporation</a>, a{' '}
              <a href="https://tuhacesalicante.com">SME</a>, a{' '}
              <a href="https://youth.europa.eu/solidarity_en">volunteering corps</a>, a{' '}
              <a href="https://restaurantemarte.com">restaurant</a>, and as a lifeguard during
              summers. My main focus these days is giving useful solutions for the world.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
