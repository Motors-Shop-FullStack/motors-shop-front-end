import { render, screen } from "@testing-library/react";
import { Textarea } from "../../components/Textarea";
describe("Button component", () => {
  test("should be able to render a button", () => {
    render(<Textarea label="Digite algo interessante" />);

    expect(screen.getAllByText("Digite algo interessante")).toBeTruthy();
  });
});
