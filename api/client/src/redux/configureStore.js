import { combineReducers, createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import employeesReducer from "./ducks/employee";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    employees:employeesReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;