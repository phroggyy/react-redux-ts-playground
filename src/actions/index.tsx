import {IPerson} from "../types";
import {ADD_PERSON, REMOVE_PERSON, UPDATE_PERSON} from "./constants";

export interface IAddPerson {
    type: ADD_PERSON
}

export interface IRemovePerson {
    type: REMOVE_PERSON
}

export interface IRemovePersonAtIndex extends IRemovePerson {
    index: number;
}

export interface IUpdatePerson {
    type: UPDATE_PERSON
    newData: IPerson
}

export interface IUpdatePersonAtIndex extends IUpdatePerson {
    index: number
}

export type PersonAction = IAddPerson | IRemovePersonAtIndex | IUpdatePersonAtIndex

export function addPerson(): IAddPerson {
    return {
        type: ADD_PERSON,
    }
}

export function removePerson(): IRemovePerson {
    return {
        type: REMOVE_PERSON,
    }
}

export function updatePerson(newData: IPerson): IUpdatePerson {
    return {
        newData,
        type: UPDATE_PERSON,
    }
}