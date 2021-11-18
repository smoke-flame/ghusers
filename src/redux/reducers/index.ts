import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {reposReducer} from "./reposReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    repos: reposReducer
})

export type RootState = ReturnType<typeof rootReducer>;