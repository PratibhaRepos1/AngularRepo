import store from './store';
import { addTask, RemoveTask, CompletedTask } from './action';

console.log('Redux Started');

const unsubscribe = store.subscribe(() => {
    console.log("updated", store.getState());
})

store.dispatch(addTask('Task 1'));
store.dispatch(addTask('Task 2'));
console.log(store.getState());

unsubscribe();

store.dispatch(CompletedTask(2));

store.dispatch(RemoveTask(1));
console.log(store.getState());