const express = require('express');
const healthCheck = require('./api/health');
const blogsAPI = require('./api/blogs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', healthCheck);
app.get('/api/blogs', blogsAPI);
app.post('/api/blogs', blogsAPI);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "IceUniverse API is live",
    routes: ["/api/health", "/api/blogs"]
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Ice Universe API Server running on port ${PORT}`);
  console.log(`📚 Blog API: http://localhost:${PORT}/api/blogs`);
  console.log(`💚 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🏠 API Info: http://localhost:${PORT}/`);
});
