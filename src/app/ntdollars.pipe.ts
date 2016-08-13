import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nTDollars'
})
export class NTDollarsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
