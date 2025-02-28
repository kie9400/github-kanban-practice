import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import App from "../App";
import React from 'react';
import TodoForm from "../component/TodoForm";
import Todo from "../component/Todo";
import { execSync } from "node:child_process";

describe("App rendering Event", () => {
  test("App component has class name: todo-app", () => {
    const { container } = render(<App />);
    const todoClass = container.querySelector(".todo-app");

    expect(todoClass).toBeTruthy();
    expect(todoClass).toBeInstanceOf(HTMLDivElement);
  });

  test("App component has child component: TodoForm", () => {
    const appInstance = TestRenderer.create(<App />).root;
    expect(appInstance.findByType(TodoForm).type).toBe(TodoForm);
  });

  test("App component has child component: Todo", (): void => {
    const appInstance = TestRenderer.create(<App />).root;
    expect(appInstance.findByType(Todo).type).toBe(Todo);
  });
});

describe("No TypeScript Error", () => {
  test("Should not have TypeScript Errors", () => {
    // Execute the command and capture the output
    expect(() => {
      try {
        const output = execSync("tsc --project ./tsconfig.json", {
          encoding: "utf-8",
        });

        expect(output).not.toContain("error");
      } catch (e) {
        console.error(e);
        throw `🚨🚨🚨️ 타입스크립트 에러가 없는지 확인하세요. 🚨🚨🚨`;
      }
    }).not.toThrow();
  });
});
