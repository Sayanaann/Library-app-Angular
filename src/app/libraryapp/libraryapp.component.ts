import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libraryapp',
  templateUrl: './libraryapp.component.html',
  styleUrls: ['./libraryapp.component.css']
})
export class LibraryappComponent {


  username=""
  password=""
  
  constructor(private route:Router){}

  login=()=>
  {
let data : any ={  "username": this.username,
"password":this.password}
  
  console.log(data)
  

  if (this.username=="admin" && this.password=="12345") {
    this.route.navigate(['/entrybooks'])
    alert("valid login")
    
  } else {
    alert("imvalid credentials")
    
  }
}
}