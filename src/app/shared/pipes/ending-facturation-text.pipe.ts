import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endingFacturationText',
})
export class EndingFacturationTextPipe implements PipeTransform {
  transform(isMonthly: boolean): string {
    return isMonthly ? '/mo' : '/yr';
  }
}
