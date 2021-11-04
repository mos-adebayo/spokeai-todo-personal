type TasksStateType = {
    tasks: TodoItemType[],
    loading: boolean,
    isCreated: boolean,
    error: string | null,
}

type TaskActionType = {
    type: string,
    tasks?: TodoItemType[],
    error?: string | null,
    newTask?: TodoItemType
}

type FetchTasksRequestType = { type: string }
type FetchTasksRequestSuccessType = {
    type: string,
    tasks: TaskItemType[]
}
type FetchTasksRequestFailureType = { type: string, error: string }

type CreateTaskRequestType = {
    type: string,
    task: TaskItemType,
}
type CreateTasksRequestSuccessType = {
    type: string,
    newTask: TaskItemType
}
type CreateTasksRequestFailureType = { type: string, error: string }
