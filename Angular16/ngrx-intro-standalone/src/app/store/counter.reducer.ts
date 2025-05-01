import { createReducer } from "@ngrx/store";
const initialState = 0;


// export const counterReducer = createReducer(
//     initialState 
// );

//another way to create reducer function 
export function counterReducer(state = initialState) {
    return state;
}