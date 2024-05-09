import {render} from "@testing-library/react";
import Form from "./FormComponent";
import { expect, it, vitest } from "vitest";
import { useSelector } from "react-redux";

vitest.mock("react-redux");

it("Отображение формы", () => {
  useSelector.mockReturnValue("");
  const component = render(<Form/>);
  expect(component).toMatchSnapshot();
});