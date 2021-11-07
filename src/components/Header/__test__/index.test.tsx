import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Header from "../index";

describe("<Header />", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
