import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import tasksReducer from "./tasksReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  tasks: tasksReducer,
  error: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
