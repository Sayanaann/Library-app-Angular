import { Component } from '@angular/core';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent {
  title=""

  search=()=>
  {
let data : any ={ "title" :this.title,}
  
  console.log(data)
  }
}
