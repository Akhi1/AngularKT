import { Component, OnInit } from '@angular/core';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-second',
  // template: `<p>Hello World</p>`,
  templateUrl: './second.component.html',
  // styles: ['p{color: #00ff00}'],
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentData: String = "Heading for parent";
  leftChild: String = "Heading for left child";
  rightChild: String = "Heading for right child";

  isTrue = false;

  isDisabled = false;

  inputValue = "Hey dude how are you";

  imageName1 = "kitty-cat-kitten-pet-45201.jpeg"
  imageName2 = "kitty-cat-kitten-pet-45201.jpeg"

  twoWay = "a";

}
