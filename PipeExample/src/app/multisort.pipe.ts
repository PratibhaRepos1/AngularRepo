import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multisort'
})
export class MultisortPipe implements PipeTransform {

  transform(value: Array<any>, args: Array<string>): any {

    // console.log(value);
    //console.log(args)
    let sortname = args[0];
    let sortprice = args[1]; // come -price here

    // console.log(sortprice);

    let sortdirection: number;
    sortdirection = 1;


    return value.sort((item: any, item2: any) => {
      console.log(item.name);
      //console.log(item2[sortprice]);


      if (!item.price.localeCompare(item2.price)) {
        return item.name.localeCompare(item2.name);
      }
      return item.price.localeCompare(item2.price);
    });


    // if (args.charAt(0) === '-') {
    //   sortField = sortField.substring(1);
    //   sortdirection = -1;

    // }



    // return value.sort((item: any, item2: any) => {
    //   let a = item[sortField].toLowerCase();
    //   let b = item2[sortField].toLowerCase();
    //   if (a < b) {

    //     return -1 * sortdirection;
    //   } else if (a > b) {
    //     return 1 * sortdirection;
    //   }
    //   else {
    //     return 0;
    //   }

    // });
  }

}
