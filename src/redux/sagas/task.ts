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

const getTaskAPI = (id: number) => {
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
  } catch (e) {
    const error = "Unable to fetch tasks. Ensure to start JSON server";
    yield put(fetchTaskRequestFailure(error));
  }
}

function* createTaskSaga(action: CreateTaskRequestType) {
  try {
    const response: AxiosResponse<TaskItemType> = yield call(
      createTaskAPI,
      action.task
    );
    yield put(createTaskRequestSuccess(response.data));
  } catch (e) {
    // TODO: Interpret HTTP response
    const error = "Unable to create tasks";
    yield put(createTaskRequestFailure(error));
  }
}

function* tasksSaga(): any {
  yield all([
    takeLatest(FETCH_TASK_REQUEST, fetchTaskSaga),
    takeLatest(CREATE_TASK_REQUEST, createTaskSaga)
  ]);
}

export default tasksSaga;
