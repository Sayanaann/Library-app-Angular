import { Component } from '@angular/core';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent {
  title=""

  edit=()=>
  {
let data : any ={ "title" :this.title,}
  
  console.log(data)
  }
}
