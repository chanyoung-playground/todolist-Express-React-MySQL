const express = require('express');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = 8080;

app.use(express.json());

const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

app.listen(() => console.log(`Express server started on port ${port}`));
