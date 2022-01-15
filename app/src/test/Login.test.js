import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Login from "../pages/Login";

//Check if login renders correctly
it("renders correctly", async () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
