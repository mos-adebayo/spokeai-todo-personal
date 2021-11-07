import React from "react";
import axios from 'axios';
import { Provider } from "react-redux";
import {mount, ReactWrapper} from "enzyme";
import Home from "../index";
import configureStore from "redux-mock-store";
import * as redux from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {todo} from "../../../__fixtures/todo";

const mockStore = configureStore();
const mockState = {
  tasks: [todo],
  task: { isCreating: false },
  error: { message: "" }
};

jest.mock("axios", () => {
  return {
    get: () => ({
      data : [{
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
      }]
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
            <Home />
          </BrowserRouter>
        </Provider>
    );
  });

  it("should match snapshot for form creation", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
