import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  aadhar=""
  address=""
  pincode=""
  dateofbirth=""
  emailid=""
  phoneno=""
  username=""
  password=""
  confirmpassword=""
  

  reg=()=>
  {
let data : any ={ "name":this.name,
"aadhar":this.aadhar,
"address":this.address,
"pincode":this.pincode,
"dateofbirth":this.dateofbirth,
"emailid":this.emailid,
"phoneno": this.phoneno,
"username":this.username,
"password":this.password,
"confirmpassword":this.confirmpassword

}
  
  console.log(data)
  }

}
