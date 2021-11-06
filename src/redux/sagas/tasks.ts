import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchTasksRequestFailure,
  fetchTasksRequestSuccess
} from "../actions/tasksActions";
import { API_BASE_URL, FETCH_TASKS_REQUEST } from "../../util/constants";
import { AxiosResponse } from "axios";

const getTasksAPI = () => {
  return axios.get<TaskItemType[]>(
    `${API_BASE_URL}/tasks?_sort=id&_order=desc`
  );
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

function* tasksSaga(): any {
  yield all([takeLatest(FETCH_TASKS_REQUEST, fetchTasksSaga)]);
}

export default tasksSaga;
