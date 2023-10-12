let books = [
    {
        id: '1',
        name: 'my life',
        author: 'John'
    },
    {
        id: '2',
        name: 'hard time passe',
        author: 'Samir'
    }
];

const getBookById = (id) => {
    return books.find((book) => book.id === id);
};

const updateBookById = (arr, Id, name, author) => {
    arr.forEach((obj) => {
        if (obj.id === Id) {
            obj.name = name;
            obj.author = author;
        }
    });
};

const booksController = {
    getBooks: (req, res) => {
        res.json(books);
    },
    getBooksById: (req, res) => {
        const { id } = req.params;
        const bookIsExist = getBookById(id);
        if (bookIsExist) {
            res.json(bookIsExist);
        } else {
            res.send('book not found');
        }
    },
    addNewBook: (req, res) => {
        const { name, author } = req.body;
        const id = String(books.length + 1);
        const newBook = { id, name, author };
        books.push(newBook);
        res.json(books);
    },
    updateBookById: (req, res) => {
        const { id } = req.params;
        const { name, author } = req.body;
        const bookIsExist = getBookById(id);
        if (bookIsExist) {
            updateBookById(books, id, name, author);
            res.json(books);
        } else {
            res.send('book not found');
        }
    },
    deleteBook: (req, res) => {
        const { id } = req.params;
        const bookIsExist = getBookById(id);
        if (bookIsExist) {
            books = books.filter((book) => book.id !== id);
            res.json(books);
        } else {
            res.send('book is not exist');
        }
    }
};

export default booksController;
