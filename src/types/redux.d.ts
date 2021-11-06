type TasksStateType = {
  tasks: TodoItemType[];
  loading: boolean;
};

type TaskStateType = {
  task: TodoItemType | null;
  loading: boolean;
  isCreating: boolean;
};

type TaskActionType = {
  type: string;
  task?: TodoItemType;
  isCreating?: boolean;
};

type TasksActionType = {
  type: string;
  tasks?: TodoItemType[];
  newTask?: TodoItemType;
};

type FetchTasksRequestType = { type: string };
type FetchTasksRequestSuccessType = {
  type: string;
  tasks: TaskItemType[];
};
type FetchTasksRequestFailureType = { type: string };

type CreateTaskRequestType = {
  type: string;
  task: TaskItemType;
};
type CreateTasksRequestSuccessType = {
  type: string;
  newTask: TaskItemType;
};
type CreateTasksRequestFailureType = { type: string };

type CreateTasksStartedType = { type: string; isCreating: boolean };

type FetchTaskRequestType = { type: string; id: string };
type FetchTaskRequestSuccessType = {
  type: string;
  task: TaskItemType;
};
type FetchTaskRequestFailureType = { type: string };

type ErrorStateType = {
  message: string | null;
};
type ErrorActionType = {
  type: string;
  message?: string | null;
};
type SetErrorType = { type: string; message: string };
type ClearErrorType = { type: string };
