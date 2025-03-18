const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the environment port for Heroku

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


