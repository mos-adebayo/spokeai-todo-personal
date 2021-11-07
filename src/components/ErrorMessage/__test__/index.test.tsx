import React from "react";
import * as redux from 'react-redux';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount, ReactWrapper } from "enzyme";
import ErrorMessage from "../index";
const mockStore = configureStore();

describe("<ErrorMessage />", () => {
  let wrapper: ReactWrapper;
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  const mockState = {
    error: { message: 'Error message' },
    task: { isCreating: true }
  }

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue(mockState);

    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
        <Provider store={mockStore()}>
          <ErrorMessage />
        </Provider>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("<TodoFormErrorMessage />", () => {
    it("should match snapshot of error from Todo from", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("<PageErrorMessage />", () => {
    beforeEach(() => {
      spyOnUseSelector = jest.spyOn(redux, 'useSelector');
      spyOnUseSelector.mockReturnValue({...mockState, task: { isCreating: false }});

      wrapper = mount(
          <Provider store={mockStore()}>
            <ErrorMessage />
          </Provider>
      );
    });

    it("should match snapshot of error message on page", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
