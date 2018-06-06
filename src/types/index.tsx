import {Dispatch} from "react-redux";

export interface IPerson {
    name: string
    email: string
    phone: string
}

export interface IStore {
    people: IPerson[]
    ticketType: string
    dispatch?: Dispatch
}