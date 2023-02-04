import {of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const observable = of(1,2,3).pipe(
    reduce((acc, value) => acc + value + 1, 0)
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