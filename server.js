// server.js
const express = require('express');
// ADDED .default HERE TO FIX THE CRASH
const userRoutes = require('./src/routes/userRoutes').default; 

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Link your routes
app.use('/users', userRoutes);

// Basic health check route
app.get('/', (req, res) => {
    res.send("Homework 02: REST API with Controller-Service-Model architecture is running.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is successfully running at http://localhost:${PORT}`);
});
