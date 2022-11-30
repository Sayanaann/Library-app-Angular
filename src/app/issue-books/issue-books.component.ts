import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent {
  name=""
  title=""
  dateofissue=""

  issue=()=>
  {
let data : any ={  "name": this.name,
"title":this.title,
"dateofissue": this.dateofissue
}
  
  console.log(data)
  }

}
