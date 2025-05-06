const express = require('express');
const path = require('path');
const RateLimit = require('express-rate-limit');
const app = express();
const port = process.env.PORT || 3000; // Use the environment port for Heroku

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Apply rate limiter to all requests
app.use(limiter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle all requests by serving the React app (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


