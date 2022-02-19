import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {

  transform(value: Array<any>, args: any): unknown {
    let sortField = args.toLowerCase();
    let sortdirection: number;
    sortdirection = 1;

    if (args.charAt(0) === '-') {
      sortField = sortField.substring(1);
      sortdirection = -1;

    }



    return value.sort((item: any, item2: any) => {
      let a = item[sortField].toLowerCase();
      let b = item2[sortField].toLowerCase();
      if (a < b) {

        return -1 * sortdirection;
      } else if (a > b) {
        return 1 * sortdirection;
      }
      else {
        return 0;
      }

    });


  }

}
