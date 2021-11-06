import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE
} from "../../util/constants";

const initialState: TaskStateType = {
  task: null,
  loading: false,
  isCreating: false
};

export default (
  state = initialState,
  action: TaskActionType
): TaskStateType => {
  switch (action.type) {
    case CREATE_TASK_FAILURE:
    case FETCH_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        loading: false
      };
    case FETCH_TASK_REQUEST:
      return {
        ...state,
        task: null,
        loading: true
      };
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        task: action.task,
        loading: false
      };
    case CREATE_TASK_REQUEST:
    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CREATE_TASK_STARTED:
      return {
        ...state,
        isCreating: action.isCreating || false
      };
    case CREATE_TASK_SUCCESS:
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreating: false
      };
    default:
      return {
        ...state
      };
  }
};
