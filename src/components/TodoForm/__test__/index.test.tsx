import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import TodoForm from "../index";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("<TodoForm />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <TodoForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
