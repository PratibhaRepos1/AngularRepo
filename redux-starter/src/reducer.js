import * as actionTypes from './actionTypes';

let id =0;
/* Reducer is a pure function */
export default function reducer(state=[], action) {

    switch(action.type) {
        case actionTypes.ADD_TASK:
            return [
                        ...state,
                        {
                            id: ++id,
                            task: action.payload.task,
                            completed: false
                        }
                    ]
        case actionTypes.COMPLETED_TASK:
            return state.map(task => task.id === action.payload.id ? {
                ...task, completed: true
            } : task)
        case actionTypes.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id)
        default:
            return state
    }

   
}