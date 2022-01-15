import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import UserList from "../pages/UserList";

//Test to make sure the App, entry point to everything works.
it("renders correctly", async () => {
  const tree = renderer.create(<UserList />).toJSON();
  expect(tree).toMatchSnapshot();
});
