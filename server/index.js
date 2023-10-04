const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});