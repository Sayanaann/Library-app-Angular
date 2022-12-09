import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
  constructor(private api :ApiService){
    api.fetchbook().subscribe(
  
      (response)=>{
      this.books=response;
      }
    )
  }
  
  
  
  books:any =
  []
}
