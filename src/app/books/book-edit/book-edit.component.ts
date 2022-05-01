import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }


  formInit() {
    let id = 0;
    let name = '';
    let author = '';
    let dateAdded = '';
    let DateModified = '';

    this.bookForm = new FormGroup({
      'id': new FormControl(id, Validators.required),
      'name': new FormControl(name, Validators.required),
      'author': new FormControl(author, Validators.required),
      'dateAdded': new FormControl(dateAdded, Validators.required),
      'DateModified': new FormControl(DateModified, Validators.required)
    });
  }


  onSubmit() {
    console.log('submit');

    const newBook = new Book(
      this.bookForm.value.id,
      this.bookForm.value.name,
      this.bookForm.value.author,
      this.bookForm.value.dateAdded,
      this.bookForm.value.DateModified
    );

    this.bookService.addNewBook(newBook);
    this.cancelEdit();
  }

  cancelEdit() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
