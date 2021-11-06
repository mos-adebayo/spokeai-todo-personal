import {
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS
} from "../../util/constants";

export const fetchTasksRequest = (): FetchTasksRequestType => ({
  type: FETCH_TASKS_REQUEST
});

export const fetchTasksRequestSuccess = (
  tasks: TaskItemType[]
): FetchTasksRequestSuccessType => ({
  type: FETCH_TASKS_SUCCESS,
  tasks
});

export const fetchTasksRequestFailure = (): FetchTasksRequestFailureType => ({
  type: FETCH_TASKS_FAILURE
});
