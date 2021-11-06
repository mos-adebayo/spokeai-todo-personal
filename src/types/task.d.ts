type ActionItemType = {
  isDone: boolean;
  description: string;
};

type ActionItemPayloadType = ActionItemType & {
  isDirty: boolean;
};

type TaskItemType = {
  id: string;
  title: string;
  items: ActionItemType[];
};
