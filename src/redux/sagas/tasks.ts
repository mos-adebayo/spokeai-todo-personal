// import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {fetchTasksRequestFailure, fetchTasksRequestSuccess} from "../actions/taskActions";
import {FETCH_TASKS_REQUEST} from "../../util/constants";
import {AxiosResponse} from "axios";

const getTasksAPI = () => {
    // axios.get<TodoItemType[]>("utle here")
    return {data: []}
};

function* fetchTasksSaga() {
    try {
        const response: AxiosResponse<TodoItemType[]> = yield call(getTasksAPI);
        yield put(fetchTasksRequestSuccess(response.data));
    } catch (e) {
        // TODO: Interpret HTTP response
        const error = "Unable to fetch tasks"
        yield put(fetchTasksRequestFailure(error))
    }
}

function* tasksSaga():any {
    yield all([takeLatest(FETCH_TASKS_REQUEST, fetchTasksSaga)])
}

export default tasksSaga;
