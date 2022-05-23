import {takeLatest} from "redux-saga/effects";
import { handleGetEmployees } from "./handler/root";
import { GET_EMPLOYEES } from "../ducks/employee";

export function* watcherSaga(){

    yield takeLatest(GET_EMPLOYEES,handleGetEmployees)
}