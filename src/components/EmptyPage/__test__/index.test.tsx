import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount, ReactWrapper } from "enzyme";
import EmptyPage from "../index";
import { LinkText } from "../styles";

const mockStore = configureStore();

describe("<EmptyPage />", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore()}>
        <EmptyPage />
      </Provider>
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain the link to trigger creation", () => {
    const link = wrapper.find(LinkText);
    expect(link.length).toBe(1);
  });
});
