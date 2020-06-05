import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../services/appdata.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private app: AppdataService) { }

  ngOnInit(): void {
    console.log(this.todayDate);
  }

  text: string = "HelLo BrO, HoPe YoU Are FIne";
  someNumber = 23;

  someNumber1 = 93;
  myjson = [{"name":"Akhil","id":2201}];

  todayDate = new Date();

  imgUrl: string;

  responseForAllPosts;
  userid: number = 3;
  allPosts(){
    this.responseForPostsById = [];
    this.app.fetchAllPostsByUserId(this.userid).subscribe(response => {
      this.responseForAllPosts = response
      console.log(this.responseForAllPosts);
    });
  }

  id: number = 1;
  responseForPostsById = [];
  allPostsById(){
    this.responseForPostsById = [];
    this.responseForAllPosts = null;
    this.app.fetchAllPostsById(this.id).subscribe(response =>{
      this.responseForPostsById.push(response);
      console.log(this.responseForPostsById);
    });
  }

}
