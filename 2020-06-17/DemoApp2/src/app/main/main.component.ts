import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../services/empdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // config;
  p:number = 1;
  pp:number = 1;
  imageDB = [];
  constructor(private emp: EmpdataService ) {
    // this.config = {
      // itemsPerPage: 5,
      // currentPage: 1,
      // totalItems: 18
    // }
    this.imageDB = [
      {
        "url":"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
      },
      {
        "url":"https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg"
      },
      {
        "url":"https://www.joblo.com/assets/images/joblo/posters/2019/03/aladdin-trailer1-poster-main-xl2.jpg"
      },
      {
        "url":"https://i0.wp.com/batman-news.com/wp-content/uploads/2019/08/Joker-Official-Images-Final-Poster-01.jpg"
      },
      {
        "url":"https://media1.popsugar-assets.com/files/thumbor/dLc8-rDFJRbZYlhpqH29Qh2mgw4/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/25/699/n/1922283/06adea33772b2923_MCDONUP_EC176/i/Once-Upon-Time-Hollywood-Movie-Posters.jpg"
      },
      {
        "url":"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
      },
      {
        "url":"https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg"
      },
      {
        "url":"https://www.joblo.com/assets/images/joblo/posters/2019/03/aladdin-trailer1-poster-main-xl2.jpg"
      },
      {
        "url":"https://i0.wp.com/batman-news.com/wp-content/uploads/2019/08/Joker-Official-Images-Final-Poster-01.jpg"
      },
      {
        "url":"https://media1.popsugar-assets.com/files/thumbor/dLc8-rDFJRbZYlhpqH29Qh2mgw4/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/25/699/n/1922283/06adea33772b2923_MCDONUP_EC176/i/Once-Upon-Time-Hollywood-Movie-Posters.jpg"
      }
    ]
   }

  //  pageChanged(event){
  //    this.config.currentPage = event;
  //  }

  retrievedEmpData;
  ngOnInit(): void {
    this.retrievedEmpData = this.emp.employees();
    console.log(this.retrievedEmpData);
  }

  responsedata=false;

  send(){
    this.responsedata = true;
  }

  donotsend(){
    this.responsedata = false;
  }


  id; userid; title; body;
  loading = false;
  postResponse;
  postData(){
    this.loading=true;
    this.emp.postData(this.userid, this.id, this.title, this.body).subscribe(response => {
      this.postResponse = response;
      console.log(this.postResponse);
      this.loading=false;
    },error => {
      this.loading=false;
      console.log(error);
    });
  }


  loginResponse;
  retrievedToken;
  generateToken(username: string, password: string){
    console.log("login details: ",username, password);
    this.emp.login(username, password).subscribe(response => {
      console.log(response);
    });
  }


}
