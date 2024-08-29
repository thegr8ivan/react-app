import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header"; 

test("renders a <header> element with the blog name", () => {
  render(<Header name="My Blog" />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByText("My Blog")).toBeInTheDocument();
});
