type ActionItemType = {
  isDone: boolean;
  description: string;
};

type ActionItemPayloadType = ActionItemType & {
  isDirty: boolean;
};

type TaskItemType = {
  id: number;
  title: string;
  items: ActionItemType[];
};
