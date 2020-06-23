import { createStore, combineReducers } from 'redux';
import ListReducer from './reducers/ListReducer'
import CardReducer from "./reducers/CardReducer";
const rootReducer = combineReducers({
    list:ListReducer,
    card:CardReducer
})

const store = createStore(rootReducer);

export default store;
