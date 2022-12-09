import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  aadharno=""
  address=""
  pincode=""
  dateofbirth=""
  emailid=""
  phoneno=""
  username=""
  password=""
  confirmpassword=""
  
  constructor( private api:ApiService,private route:Router){}

  reg=()=>
  {
let data : any ={ "name":this.name,
"aadharno":this.aadharno,
"address":this.address,
"pincode":this.pincode,
"dateofbirth":this.dateofbirth,
"emailid":this.emailid,
"phoneno": this.phoneno,
"username":this.username,
"password":this.password,
"confirmpassword":this.confirmpassword

}
  
if(this.password==this.confirmpassword){
  this.api.adduser(data).subscribe(

    (response)=>{
      console.log(response)
      alert("registration successfull")
      this.name=""
      this.aadharno=""
      this.address=""
      this.pincode=""
      this.dateofbirth=""
      this.emailid=""
      this.phoneno=""
      this.username=""
      this.password=""
      this.confirmpassword=""   
    })
  }else{
    alert("password & confirm password doesn't match,try again")
    this.password=""
    this.confirmpassword=""
  }
   

}

}
