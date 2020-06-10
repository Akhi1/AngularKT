import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor() { }

  employees() {
    return [
      { "id": 101, "empname": "Akhil", "job": "analyst", "company": "eaiesb software"},
      { "id": 102, "empname": "Kalyan", "job": "developer", "company": "google"},
      { "id": 103, "empname": "Abhiram", "job": "admin", "company": "microsoft"},
      { "id": 104, "empname": "Praneeth", "job": "analyst", "company": "github"},
      { "id": 105, "empname": "Dinesh", "job": "tester", "company": "xilinx"},
      { "id": 106, "empname": "Tej", "job": "programmer", "company": "dell"}
    ];
  }

}
