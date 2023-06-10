console.clear();
const express = require('express');
const dotenv = require('dotenv').config();
const errorMiddleware = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

connectDB.connectDb();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });
  app.get('/new.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/new.html'));
  });
  app.get('/index.html', function (req, res) {
    res.redirect('/');
  });
}

app.use('/api/complaints', require('./routes/complaintRoutes'));
app.use(errorMiddleware.errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`.bold.dim);
});
