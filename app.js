const express = require('express');
const CreateError = require('http-errors');
const http = require('http');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const fs = require('fs');

const app = express();

const indexRouter = require('./routes/index');
const AboutRouter = require('./routes/about');
const ContactRouter = require('./routes/contact');

const PORT = process.env.PORT || 5500;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/index', indexRouter);
app.use('/about', AboutRouter);
app.use('/contact', ContactRouter);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/public/CSS'));
app.use('/js', express.static(__dirname + '/public/JS'));
app.use('/img', express.static(__dirname + '/public/Img'));

app.listen(PORT, () => console.log('Server started on port: ', PORT));