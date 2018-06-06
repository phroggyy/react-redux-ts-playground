import {combineReducers} from "redux";
import {PersonAction} from "../actions";
import {ADD_PERSON, REMOVE_PERSON, UPDATE_PERSON} from "../actions/constants";
import {IPerson} from "../types";

export function people(state: IPerson[] = [], action: PersonAction) {
    switch (action.type) {
        case ADD_PERSON:
            return [...state, {name: '', email: '', phone: ''}]
        case REMOVE_PERSON:
            return [...state].splice(action.index, 1)
        case UPDATE_PERSON:
            const newState = [...state];
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