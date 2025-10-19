/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 * OPTIMIZED: Always return true to disable all animations for performance
 */

// import { useState, useEffect } from 'react';
// const QUERY = '(prefers-reduced-motion: no-preference)';
// const isRenderingOnServer = typeof window === 'undefined';

// const getInitialState = () =>
//   // For our initial server render, we won't know if the user
//   // prefers reduced motion, but it doesn't matter. This value
//   // will be overwritten on the client, before any animations
//   // occur.
//   isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

function usePrefersReducedMotion() {
  // OPTIMIZATION: Always prefer reduced motion for faster page loads
  return true;

  // ORIGINAL CODE - COMMENTED OUT FOR PERFORMANCE
  // const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);
  // useEffect(() => {
  //   const mediaQueryList = window.matchMedia(QUERY);
  //   const listener = event => {
  //     setPrefersReducedMotion(!event.matches);
  //   };
  //   mediaQueryList.addListener(listener);
  //   return () => {
  //     mediaQueryList.removeListener(listener);
  //   };
  // }, []);
  // return prefersReducedMotion;
}

export default usePrefersReducedMotion;
