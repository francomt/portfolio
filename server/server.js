const express = require('express');
const morgan = require('morgan');
//express app
const app = express();

//morgan logging middleware
app.use(morgan('dev'));
