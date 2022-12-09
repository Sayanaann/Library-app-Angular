import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }
  fetchbook=()=>
  {

    return this.http.get("http://localhost:8080/bookview")
  }
  addbook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/bookentry",dataToSend)
  }
  searchbook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/booksearch",dataToSend)
  }
  fetchuser=()=>
  {

    return this.http.get("http://localhost:8080/viewuser")
  }
  adduser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/adduser",dataToSend)
  }
searchuser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchuser",dataToSend)
  }
  deletebook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/bookdelete",dataToSend)
  }
}
