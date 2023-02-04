import { timer } from "rxjs";
import { interval } from "rxjs";
import { fromEvent } from "rxjs";


/* 2.Declrative Programming with operators
"Operators are nothing but a functions in RxJS world" */


const observable = timer(0)

const subscription = observable.subscribe(
    console.log
);


// const observableIterval = interval(1)

// const subscriptionInterval = observableIterval.subscribe(
//     console.log
// );


const observableEvent = fromEvent(
    document, 'click'
)

const subscriptionEvent = observableEvent.subscribe(
    console.log
);

/*
 2.Declrative Programming with operators
"The Of and from Operator" 
const observableOf = from('pratibha')

const subsriptionOf = observableOf.subscribe({
    next:(value) => {
        console.log(value);
    },
    complete() {
        console.log('complete');
    }

})

console.log('hello');
*/

