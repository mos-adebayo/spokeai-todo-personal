import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS
} from "../../util/constants";

export const createTaskRequest = (
  task: TaskItemType
): CreateTaskRequestType => ({
  type: CREATE_TASK_REQUEST,
  task
});

export const createTaskRequestSuccess = (
  payload: TaskItemType
): CreateTasksRequestSuccessType => ({
  type: CREATE_TASK_SUCCESS,
  newTask: payload
});

export const createTaskRequestFailure = (
  error: string
): CreateTasksRequestFailureType => ({
  type: CREATE_TASK_FAILURE,
  error
});

export const createTaskStarted = (
  isCreating: boolean
): CreateTasksStartedType => ({
  type: CREATE_TASK_STARTED,
  isCreating
});

export const fetchTaskRequest = (id: number): FetchTaskRequestType => ({
  type: FETCH_TASK_REQUEST,
  id
});

export const fetchTaskRequestSuccess = (
  task: TaskItemType
): FetchTaskRequestSuccessType => ({
  type: FETCH_TASK_SUCCESS,
  task
});

export const fetchTaskRequestFailure = (
  error: string
): FetchTaskRequestFailureType => ({
  type: FETCH_TASK_FAILURE,
  error
});
