import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  apiUrl = environment.url;
  // apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    console.log("from environment.ts file",this.apiUrl);
  }

  fetchAllPosts() {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  fetchAllPostsById(id: number) {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  fetchAllPostsByUserId(userid: number) {
    return this.http.get(`${this.apiUrl}/posts?userId=${userid}`);
  }

  postDataToServer(userid: number, id: number, body: string, title: string){
    return this.http.post(`${this.apiUrl}/posts`,
    {
      "userId": userid,
      "id": id,
      "title": title,
      "body": body
    }
    );
  }

}
