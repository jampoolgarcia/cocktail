import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let resValue = '';
    for(let str of value.split(' ')){
      resValue += `${str.charAt(0).toUpperCase()}${str.slice(1)} `;
    }
    return resValue;
  }

}
