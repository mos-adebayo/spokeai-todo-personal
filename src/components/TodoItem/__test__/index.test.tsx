import React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import TodoItem from "../index";
import {todo} from "../../../__fixtures/todo";
import {ItemWrapper} from "../styles";


describe("<TodoItem />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
        <TodoItem todo={todo}/>
    );
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render action items correctly", () => {
    const items = wrapper.find(ItemWrapper);

    expect(items.length).toEqual(2);
  });
});
