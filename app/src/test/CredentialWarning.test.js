import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CredentialWarning from "../components/CredentialWarning";

afterEach(cleanup);

//Check if component renders correctly
it("renders correctly", async () => {
  const tree = renderer.create(<CredentialWarning />).toJSON();
  expect(tree).toMatchSnapshot();
});

//Test if Credential Warning renders with correct message
it("renders warning message", () => {
  const msg = "Hello World";
  render(<CredentialWarning msg={msg} />);
  expect(screen.getByText(msg)).toBeInTheDocument();
});
