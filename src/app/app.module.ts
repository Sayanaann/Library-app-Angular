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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path :"",
    component :LibraryappComponent
  },
  {
    path :"userreg",
    component :UserregComponent
  },
  {
    path :"userlogin",
    component :UserloginComponent
  },
  {
    path :"entrybooks",
    component :BooksentryComponent
  },
  {
    path :"searchbooks",
    component :BooksearchComponent
  },
  {
    path :"viewallbooks",
    component :ViewallbooksComponent
  },
  {
    path :"delete",
    component :BookdeleteComponent
  },
  {
    path :"edit",
    component :BookeditComponent
  },
  {
    path :"issuebooks",
    component :IssueBooksComponent
  },
  





]

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
    IssueBooksComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
