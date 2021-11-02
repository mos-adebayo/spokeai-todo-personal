import React from 'react';
import Masonry from 'react-masonry-css'
import AppWrapper from '../../components/AppWrapper';
import TodoItem from '../../components/TodoItem';

const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    991: 2,
    480: 1
};

const Home = () => {
    const items = new Array(10).fill({
        title: 'Home',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius minima ut. Adipisci assumenda cupiditate dolorum eaque eius iusto, laboriosam minus placeat rem sunt ut voluptatibus. Ad delectus eos provident quisquam. A adipisci beatae cupiditate eligendi facere harum labore magni, minima nihil nobis quod recusandae repellendus similique tempore voluptas voluptates.'
    });

    return (
        <AppWrapper>
            <Masonry
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                breakpointCols={breakpointColumnsObj}>
                {
                    items.map((item: TodoItemType) => (<TodoItem title={item.title} content={item.content} key={item.id}/>))
                }
            </Masonry>
        </AppWrapper>
    );
};

export default Home;
