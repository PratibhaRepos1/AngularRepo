import {of, from } from 'rxjs';

/* 2.Declrative Programming with operators
"The Of and from Operator" */

//of([1,2,3,4,5])
//from([1,2,3,4,5])

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

