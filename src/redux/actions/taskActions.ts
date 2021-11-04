import {
    CREATE_TASK_FAILURE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS
} from "../../util/constants";

export const fetchTasksRequest = () : FetchTasksRequestType => ({
    type: FETCH_TASKS_REQUEST
});

export const fetchTasksRequestSuccess = (tasks: TaskItemType[]) : FetchTasksRequestSuccessType => ({
    type: FETCH_TASKS_SUCCESS,
    tasks
})

export const fetchTasksRequestFailure = (error: string) : FetchTasksRequestFailureType => ({
    type: FETCH_TASKS_FAILURE,
    error
})

export const createTaskRequest = (task: TaskItemType) : CreateTaskRequestType => ({
    type: CREATE_TASK_REQUEST,
    task
});

export const createTaskRequestSuccess = (payload: TaskItemType) : CreateTasksRequestSuccessType => ({
    type: CREATE_TASK_SUCCESS,
    newTask: payload
})

export const createTaskRequestFailure = (error: string) : FetchTasksRequestFailureType => ({
    type: CREATE_TASK_FAILURE,
    error
})
