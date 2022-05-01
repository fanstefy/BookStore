import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BookService
  ) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  


  addNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
