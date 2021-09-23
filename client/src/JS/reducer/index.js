import { combineReducers } from "redux";
import { contactReducer } from "./Contact";
import { editReducer } from "./edit";
export const rootReducer = combineReducers({ contactReducer, editReducer });
