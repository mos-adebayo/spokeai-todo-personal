// import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
    createTaskRequestFailure,
    createTaskRequestSuccess,
    fetchTasksRequestFailure,
    fetchTasksRequestSuccess
} from "../actions/taskActions";
import {CREATE_TASK_REQUEST, FETCH_TASKS_REQUEST} from "../../util/constants";
import {AxiosResponse} from "axios";

//TODO Move to separate file
const getTasksAPI = () => {
    // axios.get<TodoItemType[]>("utle here")
    return {data: []}
};
const createTaskAPI = (payload: TaskItemType) => {
    // axios.get<TodoItemType[]>("utle here")
    return {data: payload}
};

function* fetchTasksSaga() {
    try {
        const response: AxiosResponse<TaskItemType[]> = yield call(getTasksAPI);
        yield put(fetchTasksRequestSuccess(response.data));
    } catch (e) {
        // TODO: Interpret HTTP response
        const error = "Unable to fetch tasks"
        yield put(fetchTasksRequestFailure(error))
    }
}

function* createTaskSaga(action: CreateTaskRequestType) {
    try {
        const response: AxiosResponse<TaskItemType> = yield call(createTaskAPI, action.task);
        yield put(createTaskRequestSuccess(response.data));
    } catch (e) {
        // TODO: Interpret HTTP response
        const error = "Unable to create tasks"
        yield put(createTaskRequestFailure(error))
    }
}

function* tasksSaga() : any {
    yield all([
        takeLatest(FETCH_TASKS_REQUEST, fetchTasksSaga),
        takeLatest(CREATE_TASK_REQUEST, createTaskSaga)
    ])
}

export default tasksSaga;
