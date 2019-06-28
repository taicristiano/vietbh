import {combineReducers} from "redux";

const redux = require('redux');

const initialState = {
    testConnect: 'test',
    editFlg: false,
    editValue: {},
    alertFlg: false
};

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            noteData.push(action.data);
            return state;
        case'CHANGE_EDIT_FLAG':
            return {...state, editFlg: action.editStatus};
        case 'EDIT_DATA':
            noteData.set({
                id: action.data.id,
                noteTitle: action.data.noteTitle,
                noteContent: action.data.noteContent
            });
            return state;
        case'SET_EDIT_VALUE':
            return {...state, editValue: action.editValue};
        case 'SET_ALERT_FLAG':
            return {...state, alertFlg: action.alertFlg};
        default:
            return state;
    }
};
const allReducer = combineReducers({schedule: scheduleReducer()});
const Store = redux.createStore(allReducer);
export default Store;