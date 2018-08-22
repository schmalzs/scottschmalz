import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('dist/public'));

app.listen(PORT, () => console.info(`Server started on port ${PORT}`)); // eslint-disable-line no-console
