import { call, put } from "redux-saga/effects";
import { addEmployee, setEmployee } from "../../ducks/employee";
import { requestCreateEmployee, requestGetEmployees } from "../request/employeesR";

export function* handleGetEmployees(action) {
  try {
    const response = yield call(requestGetEmployees);
    const { data } = response;
    yield put(setEmployee(data));
  } catch (err) {
    console.log(err);
  }
}
export function* handleCreateEmployee(action) {
  try {
    const response = yield call(requestCreateEmployee(action));
    const { data } = response;
    yield put(addEmployee(data));
  } catch (err) {
    console.log(err);
  }
}
