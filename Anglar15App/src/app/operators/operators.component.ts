import { Component, OnInit } from '@angular/core';
import { Observable, filter, forkJoin } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { NewsItem } from './NewsItem';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
  template: '',
})
export class OperatorsComponent implements OnInit {
  constructor() {
    console.log('constructor called before the 1st hook');
  }

  ngOnInit(): void {
    //this.filterOperators();

    this.mapOperators();
  }

  filterOperators(): void {
    const newsFeed$ = new Observable<NewsItem>((subscriber) => {
      setTimeout(
        () => subscriber.next({ category: 'Business', content: 'A' }),
        1000
      );

      setTimeout(
        () => subscriber.next({ category: 'Sports', content: 'B' }),
        3000
      );
      setTimeout(
        () => subscriber.next({ category: 'Business', content: 'C' }),
        4000
      );
      setTimeout(
        () => subscriber.next({ category: 'Sports', content: 'D' }),
        6000
      );
      setTimeout(
        () => subscriber.next({ category: 'Business', content: 'E' }),
        7000
      );
    });

    //use pipable operators : filter
    newsFeed$.pipe(
      filter(item => item.category === 'Sports')
    ).subscribe((item: any) => console.log(item));
  }

  //map operator example

  mapOperators(): void {

    //mike is from New Delhi and likes to eat pizza

    const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

    const randomNation$ = ajax(
      'https://random-data-api.com/api/nation/random_nation'
    );

    const randomfood$ = ajax(
      'https://random-data-api.com/api/food/random_food'
    );

    forkJoin([randomName$, randomNation$, randomfood$]).subscribe(
      ([nameAjax:any, nationAjax, foodAjax]) =>
      console.log(nameAjax.response.first_name)
       // console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`)
    );


  }
}




