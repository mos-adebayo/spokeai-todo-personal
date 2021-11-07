import React from "react";
import { shallow } from "enzyme";
import Loader from "../index";

describe("<Loader />", () => {
  it("should match snapshot when loading is true", () => {
    const wrapper = shallow(<Loader isLoading />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when loading is false", () => {
    const wrapper = shallow(<Loader isLoading={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
