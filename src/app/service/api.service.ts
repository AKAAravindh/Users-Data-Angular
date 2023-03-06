import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // All data - to get all data from api
  allUsers() {
    return this.http.get('https://dummyjson.com/users')
  }
}
