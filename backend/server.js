const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/api/complaints', require('./routes/complaintRoutes'));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
