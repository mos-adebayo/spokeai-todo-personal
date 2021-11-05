import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import AppWrapper from '../../components/AppWrapper';
import TodoItem from '../../components/TodoItem';
import CreateToDo from '../../components/CreateToDo';
import Loader from '../../components/Loader';

import {RootState} from "../../redux/reducers/rootReducers";
import {fetchTasksRequest} from "../../redux/actions/taskActions";

const breakpointColumnsObj = {
  default: 4,
  1199: 3,
  991: 2,
  480: 1
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks)

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  return (
    <AppWrapper>
      <React.Fragment>
        <CreateToDo />

        <Loader />

        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          breakpointCols={breakpointColumnsObj}
        >
          {tasks.map((item: TaskItemType) => (
            <TodoItem todo={item} key={item.id} />
          ))}
        </Masonry>
      </React.Fragment>
    </AppWrapper>
  );
};

export default Home;
