import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

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


  addNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
