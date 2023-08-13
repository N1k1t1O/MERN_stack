import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import userReduser from "./userReduser";
import attractionReduser from "./attractionReduser";
import thunk from "redux-thunk"

const rootReduser = combineReducers({
    user: userReduser,
    attraction: attractionReduser
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))