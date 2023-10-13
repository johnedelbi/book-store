import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

import bookRoutes from './routes/books.js';

dotenv.config();
const PORT = process.env.PORT || 3007;

const __fileName = fileURLToPath(import.meta.url);
const PATH = dirname(__fileName);

//init express
const app = express();

//set template engine
app.set('view engine','ejs');
app.set('views', path.join(PATH,'views'))

//parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server static folder
app.use(express.static(path.join(PATH,'public')));

app.use('/api/books', bookRoutes);

//handle 404 case
app.use((req,res)=>{
    res.status(404).render('404',{
        message: 'page not found',
        linkText:'back to Home',
        link:'http://localhost:3007/api/books'
    });
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
