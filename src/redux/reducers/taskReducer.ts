import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCESS,
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
      return {
        ...state,
        loading: false,
        error: action.error || state.error
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
