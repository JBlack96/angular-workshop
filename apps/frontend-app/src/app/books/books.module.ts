import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewSingleBookComponent } from './view-single-book/view-single-book.component';

export const bookRoutes: Route[] = [
  {
    path: '',
    component: ViewBooksComponent,
  },
  {
    path: 'singlebook',
    component: ViewSingleBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  declarations: [ViewBooksComponent],
})
export class BooksModule {}
