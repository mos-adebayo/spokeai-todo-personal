import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import AppWrapper from "../../components/AppWrapper";
import TodoItem from "../../components/TodoItem";
import Loader from "../../components/Loader";

import { RootState } from "../../redux/reducers/rootReducers";
import { fetchTasksRequest } from "../../redux/actions/tasksActions";
import EmptyPage from "../../components/EmptyPage";

const breakpointColumnsObj = {
  default: 4,
  1199: 3,
  991: 2,
  480: 1
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);


  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  const tasksLength = tasks.length;

  return (
    <AppWrapper>
      <React.Fragment>
        <Loader isLoading={loading} />
        {tasksLength > 0 ? (
          <Masonry
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            breakpointCols={breakpointColumnsObj}
          >
            {tasks.map((item: TaskItemType) => (
              <Link to={`/todo/${item.id}`} key={item.id}>
                <TodoItem todo={item} />
              </Link>
            ))}
          </Masonry>
        ) : (
          <EmptyPage />
        )}
      </React.Fragment>
    </AppWrapper>
  );
};

export default Home;
