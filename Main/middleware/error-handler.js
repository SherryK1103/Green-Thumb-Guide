const express = require('express');
const errorHandler = require('./errorHandler');

const app = express();

// Other middleware and routes

// Use the error handler middleware at the end
app.use(errorHandler);

// Start your server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
