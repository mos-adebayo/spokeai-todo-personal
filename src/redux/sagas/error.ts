import { all, call, takeLatest } from "redux-saga/effects";
import { CLEAR_ERROR, SET_ERROR } from "../../util/constants";
import { clearError, setError } from "../actions/errorActions";

function* setErrorSaga(action: SetErrorType) {
  yield call(setError, action.message);
}

function* clearErrorSaga() {
  yield call(clearError);
}

function* errorSaga(): any {
  yield all([
    takeLatest(SET_ERROR, setErrorSaga),
    takeLatest(CLEAR_ERROR, clearErrorSaga)
  ]);
}

export default errorSaga;
