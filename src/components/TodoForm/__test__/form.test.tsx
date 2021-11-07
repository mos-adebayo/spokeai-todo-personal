import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import Form from "../Form";
import configureStore from "redux-mock-store";
import {todo} from "../../../__fixtures/todo";

const mockStore = configureStore();

describe("<TodoForm />", () => {
  it("should match snapshot for form creation", () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <Form />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot for form update", () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <Form task={todo} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
