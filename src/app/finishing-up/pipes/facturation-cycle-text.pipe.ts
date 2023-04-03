import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'facturationCycleText',
})
export class FacturationCycleTextPipe implements PipeTransform {
  transform(isMonthly: boolean, long: boolean): string {
    return long
      ? isMonthly
        ? 'Monthly'
        : 'Yearly'
      : isMonthly
      ? 'month'
      : 'year';
  }
}
