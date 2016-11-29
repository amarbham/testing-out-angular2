import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args: any) {
    const limit = (args) ? parseInt(args) : 50  

    return value.substring(0, limit) + "....";
  }

}
