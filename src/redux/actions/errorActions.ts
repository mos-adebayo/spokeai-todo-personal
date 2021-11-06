import { SET_ERROR, CLEAR_ERROR } from "../../util/constants";

export const setError = (message: string): SetErrorType => ({
  type: SET_ERROR,
  message
});

export const clearError = (): ClearErrorType => ({
  type: CLEAR_ERROR
});
