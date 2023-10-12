import express from 'express';
import dotenv from 'dotenv';

import bookRoutes from './routes/books.js';

dotenv.config();
const PORT = process.env.PORT || 3005;

//init express
const app = express();

//parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
