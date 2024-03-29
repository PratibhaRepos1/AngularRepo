import * as actionTypes from './actionTypes';

export const addTask = (task) => {
    return {type: actionTypes.ADD_TASK, payload: {task: task}}
};

export const RemoveTask = (id) => {
    return {type: actionTypes.REMOVE_TASK, payload: {id: id}}
}

export const CompletedTask = (id) => {
    return {type: actionTypes.COMPLETED_TASK, payload: {id: id}}
}