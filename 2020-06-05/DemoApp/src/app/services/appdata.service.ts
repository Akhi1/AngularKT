import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  fetchAllPosts() {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  fetchAllPostsById(id: number) {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  fetchAllPostsByUserId(userid: number) {
    return this.http.get(`${this.apiUrl}/posts?userId=${userid}`);
  }

}
