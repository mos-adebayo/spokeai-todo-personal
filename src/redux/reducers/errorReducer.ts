import { SET_ERROR, CLEAR_ERROR } from "../../util/constants";

const initialState: ErrorStateType = {
  message: null
};

export default (
  state = initialState,
  action: ErrorActionType
): ErrorStateType => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.message || null
      };
    case CLEAR_ERROR:
      return {
        ...state,
        message: null
      };
    default:
      return {
        ...state
      };
  }
};
