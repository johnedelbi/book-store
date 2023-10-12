import express from 'express';

const router = express.Router();

import booksController from '../controllers/books.js';

router.get('/', booksController.getBooks);
router.get('/:id', booksController.getBooksById);
router.post('/', booksController.addNewBook);
router.put('/:id', booksController.updateBookById);
router.delete('/:id', booksController.deleteBook);
export default router;
