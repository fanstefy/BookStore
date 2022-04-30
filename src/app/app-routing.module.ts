import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path: '', component: BooksComponent, children: [
    {path: 'new', component: BookEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
