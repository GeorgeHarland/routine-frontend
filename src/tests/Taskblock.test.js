import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskBlock from "./../components/taskBlock";

jest.mock("../services", () => ({
  getTasks: jest
    .fn()
    .mockResolvedValue([
      { id: 1, title: "Task 1", completed: false, category: "Daily" },
    ]),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
}));

it("displays 'No tasks yet :(' when there are no tasks", async () => {
  require("../services").getTasks.mockResolvedValue([]);

  render(<TaskBlock title="Daily" />);

  expect(await screen.findByText("No tasks yet :(")).toBeInTheDocument();
});

describe("TaskBlock", () => {
  it("renders with tasks and handles input", async () => {
    render(<TaskBlock title="Daily" />);

    // Wait for the task element to be present in the document
    const taskElement = await screen.findByText("Task 1");
    expect(taskElement).toBeInTheDocument();

    // Handle input
    fireEvent.change(screen.getByPlaceholderText("Enter task"), {
      target: { value: "New Task" },
    });
    expect(screen.getByPlaceholderText("Enter task")).toHaveValue("New Task");
  });
});
