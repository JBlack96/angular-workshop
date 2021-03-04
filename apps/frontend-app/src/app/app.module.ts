import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared-components/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksModule } from './books/books.module';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => BooksModule,
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
