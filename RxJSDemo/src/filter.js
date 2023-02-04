import {of, from, fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// const observable = of(1,2,3,4,5,6,7).pipe(
//     filter((value) => value > 3)
// );

const observable = fromEvent(
    document, 'keydown'
    .pipe(
        map(event => {
            return event.code === 'space' ? event.code : null;
        })
    )

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