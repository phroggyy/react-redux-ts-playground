import {combineReducers} from "redux";
import {PersonAction} from "../actions";
import {ADD_PERSON, REMOVE_PERSON, UPDATE_PERSON} from "../actions/constants";
import {IPerson} from "../types";

export function people(state: IPerson[] = [], action: PersonAction) {
    let newState = [];

    switch (action.type) {
        case ADD_PERSON:
            return [...state, {name: '', email: '', phone: ''}]
        case REMOVE_PERSON:
            newState = [...state];
            newState.splice(action.index, 1);

            return newState;
        case UPDATE_PERSON:
            newState = [...state];
            newState.splice(
              action.index, 1, { ...state[action.index], ...action.newData }
            )

            return newState;
        default:
            return state;
    }
}

export const reducer = combineReducers({
    people,
})