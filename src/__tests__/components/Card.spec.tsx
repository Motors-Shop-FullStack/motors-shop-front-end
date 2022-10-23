import { render, screen } from "@testing-library/react";
import { Card } from "../../components/Card";

describe("Card component", () => {
  test("should be able to render a Card", () => {
    render(<Card data={data} />);

    expect(screen.getAllByText("Test")).toBeTruthy();
  });
});
