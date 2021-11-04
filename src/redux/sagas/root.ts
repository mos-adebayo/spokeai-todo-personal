import { all, fork } from "redux-saga/effects";
import tasksSaga from "./tasks";

export function* rootSaga(): any {
    yield all([fork(tasksSaga)]);
}
