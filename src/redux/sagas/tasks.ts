import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createTaskRequestFailure,
  createTaskRequestSuccess,
  fetchTasksRequestFailure,
  fetchTasksRequestSuccess
} from "../actions/taskActions";
import {
  API_BASE_URL,
  CREATE_TASK_REQUEST,
  FETCH_TASKS_REQUEST
} from "../../util/constants";
import { AxiosResponse } from "axios";

const getTasksAPI = () => {
  return axios.get<TaskItemType[]>(
    `${API_BASE_URL}/tasks?_sort=id&_order=desc`
  );
};
const createTaskAPI = (payload: TaskItemType) => {
  return axios.post<TaskItemType>(`${API_BASE_URL}/tasks`, payload);
};

function* fetchTasksSaga() {
  try {
    const response: AxiosResponse<TaskItemType[]> = yield call(getTasksAPI);
    yield put(fetchTasksRequestSuccess(response.data));
  } catch (e) {
    const error = "Unable to fetch tasks. Ensure to start JSON server";
    yield put(fetchTasksRequestFailure(error));
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
    takeLatest(FETCH_TASKS_REQUEST, fetchTasksSaga),
    takeLatest(CREATE_TASK_REQUEST, createTaskSaga)
  ]);
}

export default tasksSaga;
