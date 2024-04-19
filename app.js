// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Backend Numerical');
});

app.get('/compare/:value', (req, res) => {
  let baseNum = 50;
  let respSMS = req.params.value+' is less than 50';
  if(req.params.value > baseNum){
    respSMS = req.params.value+' is greater than 50';
  }
    res.send(respSMS);
});

// Start the server
const PORT = process.env.PORT_1 || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});