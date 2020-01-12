import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  getUsers(){
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X');
  }

  getUser(user){
    let url = `https://gorest.co.in/public-api/users/${user}?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X`;
    console.log(url);
    return this.http.get(`https://gorest.co.in/public-api/users/${user}?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X`);
  }
}
