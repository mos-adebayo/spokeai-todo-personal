import {
  CREATE_TASK_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS
} from "../../util/constants";

const initialState: TasksStateType = {
  tasks: [],
  loading: false,
  error: null
};

export default (
  state = initialState,
  action: TasksActionType
): TasksStateType => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tasks: action.tasks || state.tasks
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || state.error
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.newTask ? [action.newTask, ...state.tasks] : state.tasks,
      };
    default:
      return {
        ...state
      };
  }
};
