import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): number {
    let mynum;
    if(value%2==0){
      mynum = Math.pow(value,2);
      return mynum;
    }else{
      mynum = Math.pow(value, 3);
      return mynum;
    }
  }

}
