import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import Home from "../index";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("<TodoItem />", () => {
  it("should match snapshot for form creation", () => {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <Home />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
