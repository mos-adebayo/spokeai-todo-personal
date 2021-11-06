import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS
} from "../../util/constants";

export const createTaskRequest = (
  task: TaskItemType
): CreateTaskRequestType => ({
  type: CREATE_TASK_REQUEST,
  task
});

export const createTaskRequestSuccess = (
  payload: TaskItemType
): CreateTaskRequestSuccessType => ({
  type: CREATE_TASK_SUCCESS,
  task: payload
});

export const createTaskRequestFailure = (): CreateTaskRequestFailureType => ({
  type: CREATE_TASK_FAILURE
});

export const createTaskStarted = (
  isCreating: boolean
): CreateTaskStartedType => ({
  type: CREATE_TASK_STARTED,
  isCreating
});

export const fetchTaskRequest = (id: string): FetchTaskRequestType => ({
  type: FETCH_TASK_REQUEST,
  id
});

export const fetchTaskRequestSuccess = (
  task: TaskItemType
): FetchTaskRequestSuccessType => ({
  type: FETCH_TASK_SUCCESS,
  task
});

export const fetchTaskRequestFailure = (): FetchTaskRequestFailureType => ({
  type: FETCH_TASK_FAILURE
});

export const updateTaskRequestSuccess = (
  payload: TaskItemType
): UpdateTaskRequestSuccessType => ({
  type: UPDATE_TASK_SUCCESS,
  task: payload
});

export const updateTaskRequestFailure = (): UpdateTaskRequestFailureType => ({
  type: UPDATE_TASK_FAILURE
});

export const updateTaskRequest = (
  task: TaskItemType
): UpdateTaskRequestType => ({
  type: UPDATE_TASK_REQUEST,
  task
});
