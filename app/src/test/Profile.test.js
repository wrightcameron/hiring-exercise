import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Profile from "../pages/Profile";

//Test to make sure the App, entry point to everything works.
it("renders correctly", async () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});
