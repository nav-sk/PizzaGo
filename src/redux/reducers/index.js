import {combineReducers} from 'redux';
import {apiDataReducer} from "./apiDataReducer";
import {menuDataReducer} from "./menuDataReducer";
import {cartDataReducer} from "./cartDataReducer";


// Exporting all reducers from a single file
export const reducers = combineReducers({apiDataReducer, menuDataReducer, cartDataReducer});