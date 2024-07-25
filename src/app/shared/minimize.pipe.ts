import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimize'
})
export class MinimizePipe implements PipeTransform {

  transform(description:string, limit:number):string {
    return description.split(' ').slice(0, limit).join(' ');
  }

}
