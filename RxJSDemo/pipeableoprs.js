import {of, from } from 'rxjs';
import { map } from 'rxjs/operators';

//use of pipe operators

const observable = of(1,2,3,4,5).pipe(
    map((value) => `$${value}`)
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