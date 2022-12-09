import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksentry',
  templateUrl: './booksentry.component.html',
  styleUrls: ['./booksentry.component.css']
})
export class BooksentryComponent {
  booktitle=""
  author=""
  description=""
  publisher=""
  language=""
  distributer=""
  releasedyear=""
  price=""
  image=""
  
  constructor(private api:ApiService){}
  readvalues=()=>
  {
let data : any ={ "booktitle" :this.booktitle,"author":this.author,
"description":this.description,
"publisher":this.publisher,
"language":this.language,
"distributer":this.distributer,
"releasedyear":this.releasedyear,
"price":this.price,
"image":this.image
}
  
console.log(data)
this.api.addbook(data).subscribe(
  (response:any)=>{
  console.log(response)
  alert("Data Added")
}

)
  }


}
