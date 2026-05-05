
const express = require('express');

const userRoutes = require('./src/routes/userRoutes').default; 

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.send("Homework 02: REST API with Controller-Service-Model architecture is running.");
});


app.listen(PORT, () => {
    console.log(`Server is successfully running at http://localhost:${PORT}`);
});
