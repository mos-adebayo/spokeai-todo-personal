import {FETCH_TASKS_FAILURE, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS} from "../../util/constants";

const initialState: TasksStateType = {
    tasks: [],
    loading: false,
    error: null,
}

export default (state = initialState, action: TaskActionType): TasksStateType => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: action.tasks || state.tasks,
            }
        case FETCH_TASKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error || state.error
            }
        default:
            return {
                ...state
            }
    }
}
