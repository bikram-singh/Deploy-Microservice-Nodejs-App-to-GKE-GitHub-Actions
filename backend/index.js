const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const port = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello, Welcome to Nodejs Application!');
});

// Work endpoint
app.get('/work', (req, res) => {
  res.status(200).send('Nodejs Application Work in progress...');
});

// Status endpoint
app.get('/status', (req, res) => {
  res.status(200).send('Still in progress...');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  console.log(`🌐 Access it locally: http://localhost:${port}`);
});
