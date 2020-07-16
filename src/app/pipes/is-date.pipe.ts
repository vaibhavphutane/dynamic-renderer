import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDate'
})
export class IsDatePipe implements PipeTransform {
  transform(value): boolean {
    return Number.isNaN(Date.parse(value))  ? false : true;
  }
}
