import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";
describe("Header component", () => {
  test("should be able to render a Header", () => {
    render(<Header />);

    expect(screen.getAllByText("Carros")).toBeTruthy();
  });
});
