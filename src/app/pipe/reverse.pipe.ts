import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }
    return this.reverseString(value);
  }

  reverseString(str: string) {
    if (str === '') {
      return '';
    } else {
      return this.reverseString(str.substr(1)) + str.charAt(0);
    }
  }
}
