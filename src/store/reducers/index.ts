import {combineReducers} from "redux";
import {userReducers} from "./userReducers";
import {todoReducer} from "./todoReducer";


export const  rootReducer = combineReducers({
    user: userReducers,
    todo: todoReducer
})


export type RootState = ReturnType<typeof rootReducer>
