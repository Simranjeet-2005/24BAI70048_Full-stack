import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./Dashboard";

test("renders dashboard heading", () => {
  render(<Dashboard />);

  expect(
    screen.getByText("Smart Task Dashboard")
  ).toBeInTheDocument();
});

test("adds a new task", async () => {
  render(<Dashboard />);

  const input = screen.getByPlaceholderText("Enter Task");
  const button = screen.getByText("Add");

  await userEvent.type(input, "Study AI");
  await userEvent.click(button);

  expect(screen.getByText("Study AI")).toBeInTheDocument();
});