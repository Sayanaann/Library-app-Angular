import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookdelete',
  templateUrl: './bookdelete.component.html',
  styleUrls: ['./bookdelete.component.css']
})
export class BookdeleteComponent {
  constructor(private api:ApiService){}
  booktitle=""
  deletebook:any=[]
  deleteBtnClick= (id:any)=>{

    let data= {"id":id}

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
