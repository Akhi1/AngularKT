import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../services/appdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private app: AppdataService) { }

  ngOnInit(): void {
  }

  userid: number=1;
  // getuserid(e){
  //   this.userid = e.target.value;
  //   console.log("useriid",this.userid);
  // }
  id: number=1;
  title: string="";
  body: string="";

  gettitle(value){
    this.title = value;
    console.log(this.title);
  }

  postArray = [];
  savedResponse;
  saveData(){
    console.log("userid=",this.userid,"id=",this.id,"title=",this.title,"body=",this.body);
    this.app.postDataToServer(this.userid, this.id, this.body, this.title).subscribe(response => {
      this.savedResponse = response;
      this.postArray[0] = this.savedResponse;
      console.log(this.savedResponse);
    });
  }



}
