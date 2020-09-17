const express = require('express');
const morgan = require('morgan');
const path = require('path');
//express app
const app = express();

//morgan logging middleware
app.use(morgan('dev'));

//serve static files middleware
app.use(express.static(path.join(`${__dirname}/public`)));

//parsing middleware
app.use(express.json());

//api routes (match all requests to /api)
app.use('/api', require('./apiRoutes/index'));

//send index.html for any requests that dont match apis (our SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

//handle 500 errors
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error!');
});

//start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🤖 Listening on port ${port}`);
});
