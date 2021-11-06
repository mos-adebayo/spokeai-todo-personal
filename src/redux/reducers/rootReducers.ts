import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  tasks: tasksReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
