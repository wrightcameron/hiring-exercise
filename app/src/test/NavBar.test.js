import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

afterEach(cleanup);

//Mock the 3rd party react router dom
const mockNavLink = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  NavLink: () => mockNavLink
}));

it("renders correctly", async () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
