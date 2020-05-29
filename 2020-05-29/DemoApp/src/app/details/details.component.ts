import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

fetchedSection;

  studentdetails = [
    {
      "department":"cse",
      "section":"B",
      "studentid":"cs101",
      "studentname":"kalyan",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"mech",
      "section":"D",
      "studentid":"mech501",
      "studentname":"tejeswar",
      "personalinfo":[
        {
          "place":"mumbai",
          "food":"puri",
          "color":"green"
        }
      ]
    },    {
      "department":"ece",
      "section":"C",
      "studentid":"ece201",
      "studentname":"dinesh",
      "personalinfo":[
        {
          "place":"hyderabad",
          "food":"vada",
          "color":"yellow"
        }
      ]
    },    {
      "department":"IT",
      "section":"A",
      "studentid":"IT101",
      "studentname":"abhiram",
      "personalinfo":[
        {
          "place":"kurnool",
          "food":"dosa",
          "color":"red"
        }
      ]
    }
  ]

}
