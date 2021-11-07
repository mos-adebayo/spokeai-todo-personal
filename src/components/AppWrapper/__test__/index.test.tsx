import React from "react";
import { shallow } from "enzyme";
import AppWrapper from "../index";

describe("<AppWrapper />", () => {
  it("should match snapshots", () => {
    const wrapper = shallow(
      <AppWrapper>
        <p>App content</p>
      </AppWrapper>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
