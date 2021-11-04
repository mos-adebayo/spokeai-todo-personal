type TasksStateType = {
    tasks: TodoItemType[],
    loading: boolean,
    error: string | null,
}

type TaskActionType = {
    type: string,
    tasks?: TodoItemType[],
    error?: string | null,
}

type FetchTasksRequestType = { type: string }
type FetchTasksRequestSuccessType = {
    type: string,
    tasks: TodoItemType[]
}
type FetchTasksRequestFailureType = { type: string, error: string }
