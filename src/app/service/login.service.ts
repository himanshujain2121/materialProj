import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      data =>console.log(data),
      err =>console.log(err)
    );
  }
}
