interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void;
}

const book: Book = {
    id: 1,
    title: 'My title',
    author: 'Dominicode'
};

const books: Book[] = [];

function getBook(): Book {
    return { id: 1, title: 'My title', author: 'xd'};
}

const myBook = getBook();

function createBook(book: Book):Book {
    return book;
}

const newBook: Book = {
    id: 1, title: 'My title', author: 'xd'
}

createBook(newBook);