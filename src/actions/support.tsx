import {AnyAction} from "redux";

export const bindIndexToActionCreator =
  (actionCreator: ((...args: any[]) => AnyAction), index: number): ((...args: any[]) => AnyAction) =>
      (...args: any[]) => ({...actionCreator(...args), index});