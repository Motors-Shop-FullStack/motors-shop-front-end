import { render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("Button component", () => {
  test("should be able to render a button", () => {
    render(<Button variant="grey1">Click Me!</Button>);

    expect(screen.getAllByText("Click Me!")).toBeTruthy();
  });
});
