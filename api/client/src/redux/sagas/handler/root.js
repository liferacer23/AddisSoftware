import { call, put } from "redux-saga/effects";
import { setEmployee } from "../../ducks/employee";
import { requestGetEmployees } from "../request/employeesR";

export function* handleGetEmployees(action) {
  try {
    const response = yield call(requestGetEmployees);
    const { data } = response;
    yield put(setEmployee(data));
  } catch (err) {
    console.log(err);
  }
}
