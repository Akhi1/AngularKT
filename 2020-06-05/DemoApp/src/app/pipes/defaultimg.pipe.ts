import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimg'
})
export class DefaultimgPipe implements PipeTransform {

  transform(value: string): string {
    if(value)
    return value;
    else
    return 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg';
  }

}
