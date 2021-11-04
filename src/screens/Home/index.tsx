import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import AppWrapper from '../../components/AppWrapper';
import TodoItem from '../../components/TodoItem';
import CreateToDo from '../../components/CreateToDo';
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
  const { loading, tasks, error } = useSelector((state: RootState) => state.tasks)

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  console.log(loading, tasks, error, "Reducx connected");

  const items = new Array(15).fill({
    title: 'Home',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius minima ut. Adipisci assumenda cupiditate dolorum eaque eius iusto, laboriosam minus placeat rem sunt ut voluptatibus. Ad delectus eos provident quisquam. A adipisci beatae cupiditate eligendi facere harum labore magni, minima nihil nobis quod recusandae repellendus similique tempore voluptas voluptates.'
  });

  return (
    <AppWrapper>
      <React.Fragment>
        <CreateToDo />
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          breakpointCols={breakpointColumnsObj}
        >
          {items.map((item: TodoItemType) => (
            <TodoItem title={item.title} content={item.content} key={item.id} />
          ))}
        </Masonry>
      </React.Fragment>
    </AppWrapper>
  );
};

export default Home;
