import React from "react";
import { Provider } from "react-redux";
import {mount, ReactWrapper} from "enzyme";
import TodoItem from "../index";
import configureStore from "redux-mock-store";
import {todo} from "../../../__fixtures/todo";
import * as redux from "react-redux";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore();
const mockState = {
  task: todo ,
  error: { message: "" }
};

jest.mock("axios", () => {
  return {
    get: () => ({
      data : {
        id: "1234567890",
        title: "Title",
        actionItems: [
          {
            isDone: true,
            description: "description 1"
          },
          {
            isDone: false,
            description: "description 2"
          },
          {
            isDone: false,
            description: "description 3"
          }
        ]
      }
    })
  };
});


describe("<TodoItem />", () => {
  let wrapper: ReactWrapper;
  let spyOnUseSelector;
  let spyOnUseDispatch;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, "useSelector");
    spyOnUseSelector.mockReturnValue(mockState);

    spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
        <Provider store={mockStore()}>
          <BrowserRouter>
            <TodoItem />
          </BrowserRouter>
        </Provider>
    );
  });

  it("should match snapshot for form creation", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
