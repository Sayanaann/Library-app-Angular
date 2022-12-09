import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent {
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
        deleteBtnClick= (id:any)=>{

          let data:any = {"id":id}
      
          this.api.deletebook(data).subscribe(
      
            (response:any)=>{
      
              console.log(response)
      
              if (response.status == "success") {
      
                alert("Employee deleted Successfully")
      
              } else {
      
                alert("Invalid")
          
              }
  
      }
          )

    }

}
