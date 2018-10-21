import express from 'express';

let serverHandle = null;

const app = express();

app.use(express.static('dist/public'));

export const stop = () => {
  if (serverHandle) {
    console.info('Stopping server'); // eslint-disable-line no-console
    serverHandle.close();
  }
};

export const start = (port = process.env.PORT || 3000) =>
  new Promise(resolve => {
    if (serverHandle) {
      resolve();
    }

    serverHandle = app.listen(port, () => {
      console.info(`Server started on port ${port}`); // eslint-disable-line no-console
      resolve();
    });
  });
