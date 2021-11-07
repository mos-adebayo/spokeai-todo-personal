import React from "react";
import { Provider } from "react-redux";
import { mount, ReactWrapper } from "enzyme";
import Form from "../Form";
import configureStore from "redux-mock-store";
import { todo } from "../../../__fixtures/todo";
import * as redux from "react-redux";
import { AddButton, ItemWrapper } from "../styles";
import { FormControl } from "react-bootstrap";

const mockStore = configureStore();
const mockState = {
  task: { isCreating: true, loading: false, task: null }
};

describe("<TodoForm />", () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let wrapper: ReactWrapper;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, "useSelector");
    spyOnUseSelector.mockReturnValue(mockState);

    spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
      <Provider store={mockStore()}>
        <Form task={todo} />
      </Provider>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should match snapshot for form creation", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render all action items", () => {
    const items = wrapper.find(ItemWrapper);
    expect(items.length).toEqual(3);
  });

  it("should handle form inputs change", () => {
    const inputs = wrapper.find(FormControl);
    const addButton = wrapper.find(AddButton);
    expect(inputs.length).toEqual(4);

    inputs
      .at(0)
      .simulate("change", { target: { value: "title", name: "title" } });
    inputs
      .at(1)
      .simulate("change", {
        target: { value: "description", name: "description" }
      });

    addButton.simulate("click");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
