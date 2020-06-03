import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      //console.log(response);
      this.department = response.dept;
      this.section = response.sec;
      console.log("department =",this.department,"section =",this.section);
    });
  }

  department ='';
  section ='';
  studentid;



  getColor(name){
    // if(name.length>5){
    //   return 'green';
    // }else if(name.length<6){
    //   return 'red';
    // }
    switch(name.length>5){
      case true : return 'green';
      case false : return 'red';
    }
  }

  getTxtColor(name){
    if(name.length>5){
      return 'white';
    }else if(name.length<6){
      return 'blue';
    }
  }



  studentsdata = [
    {
      "department":"cse",
      "section":"A",
      "studentid":"cs101",
      "studentname":"george",
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
      "section":"A",
      "studentid":"mech101",
      "studentname":"martin",
      "personalinfo":[
        {
          "place":"mumbai",
          "food":"puri",
          "color":"green"
        }
      ]
    },
    {
      "department":"ece",
      "section":"A",
      "studentid":"ece101",
      "studentname":"tim",
      "personalinfo":[
        {
          "place":"hyderabad",
          "food":"vada",
          "color":"yellow"
        }
      ]
    },
    {
      "department":"ece",
      "section":"A",
      "studentid":"ece105",
      "studentname":"samuel",
      "personalinfo":[
        {
          "place":"hyderabad",
          "food":"vada",
          "color":"yellow"
        }
      ]
    },
    {
      "department":"it",
      "section":"A",
      "studentid":"it101",
      "studentname":"ronald",
      "personalinfo":[
        {
          "place":"kurnool",
          "food":"dosa",
          "color":"red"
        }
      ]
    },
    {
      "department":"cse",
      "section":"B",
      "studentid":"cs102",
      "studentname":"robin",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"ece",
      "section":"B",
      "studentid":"ece101",
      "studentname":"shane",
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
      "section":"B",
      "studentid":"mech101",
      "studentname":"jamal",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"it",
      "section":"B",
      "studentid":"it101",
      "studentname":"kim",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"cse",
      "section":"C",
      "studentid":"cs103",
      "studentname":"Drake",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"ece",
      "section":"C",
      "studentid":"ece103",
      "studentname":"carl",
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
      "section":"C",
      "studentid":"mech103",
      "studentname":"travis",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"it",
      "section":"B",
      "studentid":"it103",
      "studentname":"sophie",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
{
      "department":"cse",
      "section":"D",
      "studentid":"cs104",
      "studentname":"brad",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"ece",
      "section":"D",
      "studentid":"ece104",
      "studentname":"robert",
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
      "studentid":"mech104",
      "studentname":"stella",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    },
    {
      "department":"it",
      "section":"D",
      "studentid":"it104",
      "studentname":"mike",
      "personalinfo":[
        {
          "place":"delhi",
          "food":"idli",
          "color":"green"
        }
      ]
    }
  ]

}
