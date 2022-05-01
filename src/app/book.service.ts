import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  
  books = [{
    "id": 1,
    "name": "book 1",
    "author": "book's author",
    "dateAdded": "date",
    "DateModified": "date"
  }, {
    "id": 2,
    "name": "book 2",
    "author": "book's author",
    "dateAdded": "date",
    "DateModified": "date"
  }, {
    "id": 3,
    "name": "book 3",
    "author": "book's author",
    "dateAdded": "date",
    "DateModified": "date"
  }, {
    "id": 4,
    "name": "book 4",
    "author": "book's author",
    "dateAdded": "date",
    "DateModified": "date"
  }, {
    "id": 5,
    "name": "book 5",
    "author": "book's author",
    "dateAdded": "date",
    "DateModified": "date"
  }]


  getBooks() {
    return this.books;
  }

  addNewBook(book: Book) {
    console.log(book);
    this.books.push(book);
  }
}
