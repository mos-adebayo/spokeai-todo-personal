import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE
} from "../../util/constants";

const initialState: TaskStateType = {
  task: null,
  loading: false,
  error: null,
  isCreating: false
};

export default (
  state = initialState,
  action: TaskActionType
): TaskStateType => {
  switch (action.type) {
    case CREATE_TASK_FAILURE:
    case FETCH_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || state.error
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
      return {
        ...state,
        loading: true
      };
    case CREATE_TASK_STARTED:
      return {
        ...state,
        isCreating: action.isCreating || false,
        error: null
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isCreating: false
      };
    default:
      return {
        ...state
      };
  }
};
