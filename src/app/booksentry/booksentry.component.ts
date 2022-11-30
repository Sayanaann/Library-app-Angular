import { Component } from '@angular/core';

@Component({
  selector: 'app-booksentry',
  templateUrl: './booksentry.component.html',
  styleUrls: ['./booksentry.component.css']
})
export class BooksentryComponent {
  title=""
  image=""
  price=""

  readvalues=()=>
  {
let data : any ={ "title" :this.title,
"image" : this.image,
"price":this.price}
  
  console.log(data)
  }

}
