import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppWrapper from "../../components/AppWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducers";
import Loader from "../../components/Loader";
import Item from "../../components/TodoItem";
import { fetchTaskRequest } from "../../redux/actions/taskActions";
import { Wrapper } from "./styles";

const TodoItem: React.FC = () => {
  const dispatch = useDispatch();
  const { task, loading } = useSelector((state: RootState) => state.task);

  const { id }: { id: string } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchTaskRequest(id));
    }
  }, [id]);

  return (
    <AppWrapper>
      <Wrapper>
        <Loader isLoading={loading} />
        {task && <Item todo={task} />}
      </Wrapper>
    </AppWrapper>
  );
};

export default TodoItem;
