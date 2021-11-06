type TasksStateType = {
  tasks: TodoItemType[];
  loading: boolean;
  error: string | null;
};

type TaskStateType = {
  task: TodoItemType | null;
  loading: boolean;
  error: string | null;
  isCreating: boolean;
};

type TaskActionType = {
  type: string;
  tasks?: TodoItemType[];
  error?: string | null;
  isCreating?: boolean;
};

type TasksActionType = {
  type: string;
  tasks?: TodoItemType[];
  error?: string | null;
  newTask?: TodoItemType;
};

type FetchTasksRequestType = { type: string };
type FetchTasksRequestSuccessType = {
  type: string;
  tasks: TaskItemType[];
};
type FetchTasksRequestFailureType = { type: string; error: string };

type CreateTaskRequestType = {
  type: string;
  task: TaskItemType;
};
type CreateTasksRequestSuccessType = {
  type: string;
  newTask: TaskItemType;
};
type CreateTasksRequestFailureType = { type: string; error: string };

type CreateTasksStartedType = { type: string; isCreating: boolean };

type FetchTaskRequestType = { type: string; id: number };
type FetchTaskRequestSuccessType = {
  type: string;
  task: TaskItemType;
};
type FetchTaskRequestFailureType = { type: string; error: string };
