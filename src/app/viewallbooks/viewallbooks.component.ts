import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallbooks',
  templateUrl: './viewallbooks.component.html',
  styleUrls: ['./viewallbooks.component.css']
})
export class ViewallbooksComponent {
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
