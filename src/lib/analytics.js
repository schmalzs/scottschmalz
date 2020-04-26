import ReactGA from 'react-ga';

const inProductionOnly = func => {
  if (window.document.location.hostname.includes('scottschmalz.com')) {
    return func;
  }
  return () => {};
};

export const initialize = inProductionOnly(ReactGA.initialize);
export const pageview = inProductionOnly(ReactGA.pageview);
export const event = inProductionOnly(ReactGA.event);
