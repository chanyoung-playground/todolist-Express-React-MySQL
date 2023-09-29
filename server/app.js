const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const port = 8080;

app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');

const handleError = require('./middlewares/errorHandler');

app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);
app.use(handleError);

app.listen(port, () => console.log(`Express server started on port ${port}`));
