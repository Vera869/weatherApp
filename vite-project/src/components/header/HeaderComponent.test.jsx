import {render, screen} from "@testing-library/react";
import HeaderBox from "./HeaderComponent";
import { expect, it, vitest } from "vitest";

vitest.mock("react-redux");

it("Отображение заголовка в хедере", () => {
  render(<HeaderBox/>);
  const message = screen.queryByText(/SearchWeather!/i);
  expect(message).toBeDefined();
});
