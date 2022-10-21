import { render, screen } from "@testing-library/react";
import { Button } from "../../components/Button";
import { Comment } from "../../components/Comment";
describe("Button component", () => {
  test("should be able to render a button", () => {
    render(
      <Comment>
        <Button variant="disable">Clique-me</Button>
      </Comment>
    );

    expect(screen.getAllByText("Clique-me")).toBeTruthy();
  });
});
