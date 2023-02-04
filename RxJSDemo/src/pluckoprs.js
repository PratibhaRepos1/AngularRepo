import {of, from, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

//use of pluck opertors

const observable = fromEvent(
    document, 'keydown'
    ).pipe(
       pluck('code')
    )

const subscription = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete(){
        console.log('complete')
    }
})
console.log('hello');
