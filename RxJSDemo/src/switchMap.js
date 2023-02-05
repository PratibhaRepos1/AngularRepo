import { fromEvent, interval } from 'rxjs';
import { map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const button = document.querySelector('#btn')
const observable = fromEvent(
    button, 'click'
).pipe(
    switchMap(() => {
       // return interval(1000).pipe(
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            take(5),
            tap({
                complete() {
                    console.log('inner observable completed')
                }
            })
           
        )
       // return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    }),
    
)

const subscription = observable.subscribe({
    next(value) {
   console.log(value)
    },
    complete(){
        console.log('complete')
    }
})
console.log('hello');
