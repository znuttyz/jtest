'use strict';

const app = require('./app');

const PORT = process.env.REACT_APP_API_PORT || 9000;
// const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});