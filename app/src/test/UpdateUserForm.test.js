import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import UpdateUserForm from "../components/UpdateUserForm";

//Create user to use for testing
const user = {
  firstName: "John",
  lastName: "Doe",
  username: "jdoe",
  email: "johndoe@mail.com",
  birthYear: "1999",
  favColor: "Blue"
};

//Test to make sure the App, entry point to everything works.
it("renders correctly", async () => {
  const tree = renderer.create(<UpdateUserForm user={user} />).toJSON();
  expect(tree).toMatchSnapshot();
});
