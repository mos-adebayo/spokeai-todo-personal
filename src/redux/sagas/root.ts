import { all, fork } from "redux-saga/effects";
import tasksSaga from "./tasks";
import taskSaga from "./task";
import errorSaga from "./error";

export function* rootSaga(): any {
  yield all([fork(tasksSaga), fork(taskSaga), fork(errorSaga)]);
}
