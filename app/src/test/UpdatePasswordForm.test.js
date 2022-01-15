import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import UpdatePasswordForm from "../components/UpdatePasswordForm";

//Test to make sure the App, entry point to everything works.
it("renders correctly", async () => {
  const tree = renderer.create(<UpdatePasswordForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
