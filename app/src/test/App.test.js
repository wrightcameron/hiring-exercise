import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

//Test to make sure the App, entry point to everything works.
it("renders correctly", async () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
