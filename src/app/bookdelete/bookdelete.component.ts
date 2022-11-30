import { Component } from '@angular/core';

@Component({
  selector: 'app-bookdelete',
  templateUrl: './bookdelete.component.html',
  styleUrls: ['./bookdelete.component.css']
})
export class BookdeleteComponent {

  booktitle=""

  delete=()=>
  {
    let data : any = {"booktitle":this.booktitle}
    console.log(data)
  }

}
