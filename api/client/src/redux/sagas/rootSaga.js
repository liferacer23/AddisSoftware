import {takeLatest} from "redux-saga/effects";
import { handleGetEmployees ,handleCreateEmployee} from "./handler/root";
import { GET_EMPLOYEES } from "../ducks/employee";
import {CREATE_EMPLOYEE} from "../ducks/employee";

export function* watcherSaga(){

    yield takeLatest(GET_EMPLOYEES,handleGetEmployees);
    yield takeLatest(CREATE_EMPLOYEE,handleCreateEmployee);
    
}