import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createTaskRequestFailure,
  createTaskRequestSuccess,
  fetchTaskRequestFailure,
  fetchTaskRequestSuccess
} from "../actions/taskActions";
import {
  API_BASE_URL,
  CREATE_TASK_REQUEST,
  FETCH_TASK_REQUEST
} from "../../util/constants";
import { AxiosResponse } from "axios";
import { interpretHTTPError } from "../../util/helper";
import { clearError, setError } from "../actions/errorActions";

const getTaskAPI = (id: string) => {
  return axios.get<TaskItemType>(`${API_BASE_URL}/tasks/${id}`);
};

const createTaskAPI = (payload: TaskItemType) => {
  return axios.post<TaskItemType>(`${API_BASE_URL}/tasks`, payload);
};

function* fetchTaskSaga(action: FetchTaskRequestType) {
  try {
    const response: AxiosResponse<TaskItemType> = yield call(
      getTaskAPI,
      action.id
    );
    yield put(fetchTaskRequestSuccess(response.data));
    yield put(clearError());
  } catch (e: any) {
    const error = interpretHTTPError(e);
    yield put(setError(error));
    yield put(fetchTaskRequestFailure());
  }
}

function* createTaskSaga(action: CreateTaskRequestType) {
  try {
    const response: AxiosResponse<TaskItemType> = yield call(
      createTaskAPI,
      action.task
    );
    yield put(createTaskRequestSuccess(response.data));
    yield put(clearError());
  } catch (e: any) {
    const error = interpretHTTPError(e);
    yield put(setError(error));
    yield put(createTaskRequestFailure());
  }
}

function* tasksSaga(): any {
  yield all([
    takeLatest(FETCH_TASK_REQUEST, fetchTaskSaga),
    takeLatest(CREATE_TASK_REQUEST, createTaskSaga)
  ]);
}

export default tasksSaga;
