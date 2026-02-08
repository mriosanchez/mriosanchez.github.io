import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  /* Z-INDEX NEGATIVO: Se coloca detrás de todo el contenido */
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(40, 60, 150, 0.15) 0%,
      rgba(40, 60, 150, 0.1) 40%,
      transparent 80%
    );
    opacity: var(--opacity, 0);
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cursor = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || window.innerWidth <= 768) {return;}

    const root = document.documentElement;

    const updateMousePosition = e => {
      // Usamos requestAnimationFrame para una suavidad total (60fps+)
      window.requestAnimationFrame(() => {
        root.style.setProperty('--mouse-x', `${e.clientX}px`);
        root.style.setProperty('--mouse-y', `${e.clientY}px`);
        root.style.setProperty('--opacity', '1');
      });
    };

    // Ocultar cuando el ratón sale de la ventana
    const handleMouseLeave = () => {
      root.style.setProperty('--opacity', '0');
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasMounted]);

  if (!hasMounted) {return null;}

  return <StyledCursor />;
};

export default Cursor;
