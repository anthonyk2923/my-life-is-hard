console.clear();
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const errorMiddleware = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');

connectDB.connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/complaints', require('./routes/complaintRoutes'));
app.use(errorMiddleware.errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`.bold.dim);
});
