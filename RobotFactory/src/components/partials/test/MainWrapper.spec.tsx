import * as React from "react";
import { shallow, mount } from "enzyme";
import Android from "material-ui/svg-icons/action/android";

import { MainWrapper } from "../MainWrapper";

describe("Shallow render MainWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainWrapper />);
  });

  it("Renders Robot Icon to the header", () => {
    expect(wrapper.contains(<Android />)).toBeTruthy();
  });

  it("Renders the footer with string", () => {
    expect(
      wrapper.contains(
        <div style={{ padding: "3%", fontSize: "14px" }}>
          Copyright © 2018 - All Rights Reserved
        </div>
      )
    ).toBeTruthy();
  });
});
