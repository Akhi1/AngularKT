import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor(private http: HttpClient) { }

  token = 'ABCE2134';
  myheader = new HttpHeaders(
    {
      'token':this.token,
      'Content-Type':'application/json;'
    }
  );

  postData(userid: number, id: number, title: string, body: string) {
    let myheader = new HttpHeaders(); //immutable
    myheader = myheader.set('token','ABCD1234');
    myheader = myheader.set('content-type','application/json');

    console.log("token i'm sending",myheader);
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      "userId": userid,
      "id": id,
      "title": title,
      "body": body
    },
    {
      headers: myheader
    }
    );
  }

  getData(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`,
    {
      headers: {
        "token":"abcd1234",
        "content-type":"application/json"
      }
    });
  }

  employees() {
    return [
      { "id": 101, "empname": "Akhil", "job": "analyst", "company": "eaiesb software"},
      { "id": 102, "empname": "Kalyan", "job": "developer", "company": "google"},
      { "id": 103, "empname": "Abhiram", "job": "admin", "company": "microsoft"},
      { "id": 104, "empname": "Praneeth", "job": "analyst", "company": "github"},
      { "id": 105, "empname": "Dinesh", "job": "tester", "company": "xilinx"},
      { "id": 106, "empname": "Tej", "job": "programmer", "company": "dell"},
      { "id": 107, "empname": "Akhil", "job": "analyst", "company": "eaiesb software"},
      { "id": 108, "empname": "Kalyan", "job": "developer", "company": "google"},
      { "id": 109, "empname": "Abhiram", "job": "admin", "company": "microsoft"},
      { "id": 110, "empname": "Praneeth", "job": "analyst", "company": "github"},
      { "id": 111, "empname": "Dinesh", "job": "tester", "company": "xilinx"},
      { "id": 112, "empname": "Tej", "job": "programmer", "company": "dell"},
      { "id": 113, "empname": "Akhil", "job": "analyst", "company": "eaiesb software"},
      { "id": 114, "empname": "Kalyan", "job": "developer", "company": "google"},
      { "id": 115, "empname": "Abhiram", "job": "admin", "company": "microsoft"},
      { "id": 116, "empname": "Praneeth", "job": "analyst", "company": "github"},
      { "id": 117, "empname": "Dinesh", "job": "tester", "company": "xilinx"},
      { "id": 118, "empname": "Tej", "job": "programmer", "company": "dell"}
    ];
  }

}
