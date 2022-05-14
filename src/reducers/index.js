import {applyMiddleware, combineReducers, createStore} from "redux";
import repoReducer from "./repoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repo: repoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store