import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksearchuser',
  templateUrl: './booksearchuser.component.html',
  styleUrls: ['./booksearchuser.component.css']
})
export class BooksearchuserComponent {
  constructor(private api:ApiService){}
  booktitle=""
searchbook:any=[]
search=()=>{
      let data={"booktitle":this.booktitle}
      console.log(data)
      this.api.searchbook(data).subscribe(
        (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid employee code")
        } else {
          this.searchbook=response
        }
        }
      )
        }
}
