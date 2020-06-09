import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(ChildComponent) child;

  constructor(private change: ChangeDetectorRef, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(response =>{
      this.subscribedMessage = response;
      console.log(this.subscribedMessage);
    });
  }

  public viewChildMessage;

  ngAfterViewInit(): void {
    this.viewChildMessage = this.child.mySecretMsg();
    console.log("new message",this.viewChildMessage);
  }

  ngAfterViewChecked(): void {
    this.change.detectChanges();
  }

  public parentMessage = "Hello child dude";

  public childMessage = '';


  public subscribedMessage;










}
