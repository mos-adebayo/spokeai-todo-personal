import {FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS} from "../../util/constants";

export const fetchTasksRequest = () : FetchTasksRequestType => ({
    type: FETCH_TASKS_REQUEST
});

export const fetchTasksRequestSuccess = (tasks: TodoItemType[]) : FetchTasksRequestSuccessType => ({
    type: FETCH_TASKS_SUCCESS,
    tasks
})

export const fetchTasksRequestFailure = (error: string) : FetchTasksRequestFailureType => ({
    type: FETCH_TASKS_FAILURE,
    error
})
