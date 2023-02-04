import { interval } from 'rxjs';
import {take, reduce,scan } from 'rxjs/operators';

const observable = interval(500).pipe(
    take(5),
    scan((acc, value) => acc + value, 0)
   // reduce((acc, value) => acc + value, 0)
);

const subscription = observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete(){
        console.log('complete')
    }
})
console.log('hello');
