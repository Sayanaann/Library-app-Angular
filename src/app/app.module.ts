import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryappComponent } from './libraryapp/libraryapp.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BooksentryComponent } from './booksentry/booksentry.component';
import { ViewallbooksComponent } from './viewallbooks/viewallbooks.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryappComponent,
    UserregComponent,
    UserloginComponent,
    BooksentryComponent,
    ViewallbooksComponent,
    BooksearchComponent,
    BookdeleteComponent,
    BookeditComponent,
    IssueBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
