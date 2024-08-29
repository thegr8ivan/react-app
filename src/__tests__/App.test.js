import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('banner')).toHaveTextContent("My Awesome Blog");
  expect(screen.getByRole('complementary')).toBeInTheDocument(); // for About
  expect(screen.getByRole('main')).toBeInTheDocument(); // for ArticleList
});
