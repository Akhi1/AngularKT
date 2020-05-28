import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fetchedName;
  fetchName(name){
    console.log("name is = ",name);
    this.fetchedName = name;
  }

  employeedata = [
    {
      "id": "1001",
      "name": "Robin",
      "details": [{
          "age": 20,
          "gender": "male",
          "height": "5.4ft"
        }],
      "address": [{
        "street":"05",
        "city":"hyderabad",
        "country":"india",
        "pincode":"500041"
      }],
      "job":[{
        "position":"admin",
        "field":"accounts",
        "company":"google",
        "location":"hyderabad, india"
      }]
    },
    {
      "id": "1002",
      "name": "David",
      "details": [{
          "age": 22,
          "gender": "male",
          "height": "6.1ft"
        }],
      "address": [{
        "street":"12",
        "city":"agra",
        "country":"delhi",
        "pincode":"300022"
      }],
      "job":[{
        "position":"developer",
        "field":"IT",
        "company":"salesforce",
        "location":"gurgaon"
      }]
    },
      {
      "id": "1003",
      "name": "Martin",
      "details": [{
          "age": 29,
          "gender": "male",
          "height": "5.9ft"
        }],
      "address": [{
        "street":"01",
        "city":"ahmedabad",
        "country":"gujarat",
        "pincode":"400989"
      }],
      "job":[{
        "position":"chef",
        "field":"management",
        "company":"taj",
        "location":"mumbai, india"
      }]
    }
    ]

}
