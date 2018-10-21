import * as analytics from '../lib/analytics';

const trackPageView = WrappedComponent => {
  analytics.pageview(window.location.pathname + window.location.search);
  return WrappedComponent;
};

export default trackPageView;
