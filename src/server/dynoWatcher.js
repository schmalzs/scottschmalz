import fetch from 'node-fetch';

const INTERVAL = 60000 * 25;

let intervalHandle = null;

export const start = () => {
  intervalHandle = setInterval(
    () => fetch('http://www.scottschmalz.com/'),
    INTERVAL
  );
};

export const stop = () => {
  if (intervalHandle) {
    clearInterval(intervalHandle);
  }
};
