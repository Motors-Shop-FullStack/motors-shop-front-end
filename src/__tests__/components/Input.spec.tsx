import { render, screen } from "@testing-library/react";
import { Input } from "../../components/Input";

describe("Input component", () => {
  test("should be able to render a input", () => {
    render(<Input label="Test" placeholder="Just for tests" />);

    expect(screen.getAllByText("Test")).toBeTruthy();
  });

  test("shold be have a label tag", () => {
    render(<Input label="Test" placeholder="Just for tests" id="test" />);

    expect(screen.getByLabelText("Test")).toBeDefined();
  });
});
