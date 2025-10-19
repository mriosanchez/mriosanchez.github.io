import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1000;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(40, 60, 150, 0.2) 0%,
      rgba(40, 60, 150, 0.15) 25%,
      rgba(40, 60, 150, 0.08) 50%,
      rgba(40, 60, 150, 0.03) 75%,
      transparent 100%
    );
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cursor = () => {
  useEffect(() => {
    const updateMousePosition = e => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--mouse-x', `${mouseX}%`);
      document.documentElement.style.setProperty('--mouse-y', `${mouseY}%`);
    };

    // Solo agregar el listener en desktop y si el elemento existe
    const shouldAddListener = window.innerWidth > 768;

    if (shouldAddListener) {
      document.addEventListener('mousemove', updateMousePosition);

      // Inicializar posición por defecto
      document.documentElement.style.setProperty('--mouse-x', '50%');
      document.documentElement.style.setProperty('--mouse-y', '50%');
    }

    return () => {
      if (shouldAddListener) {
        document.removeEventListener('mousemove', updateMousePosition);
      }
    };
  }, []);

  return <StyledCursor />;
};

export default Cursor;
