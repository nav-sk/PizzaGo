import {combineReducers} from 'redux';
import {apiDataReducer} from "./apiDataReducer";
import {menuDataReducer} from "./menuDataReducer";
import {cartDataReducer} from "./cartDataReducer";


export const reducers = combineReducers({apiDataReducer, menuDataReducer, cartDataReducer});