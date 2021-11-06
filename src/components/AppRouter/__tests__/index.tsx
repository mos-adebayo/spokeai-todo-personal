import React from "react";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
import AppRouter from "../index";

describe("<AppRouter />", () => {
  it("should match snapshots", () => {
    const wrapper = shallow(<AppRouter Router={BrowserRouter} />);
    expect(wrapper).toMatchSnapshot();
  });
});
