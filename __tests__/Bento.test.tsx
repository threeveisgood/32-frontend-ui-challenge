import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bento from "../common/Bento";
import "@testing-library/jest-dom";

describe("<Bento />", () => {
  it("can click outside and inner in Bento button", async () => {
    render(<Bento />);

    const button = screen.getByRole("button");
    const bentoBoard = screen.getByText("Pop-Tarts");

    await userEvent.click(button);
    await userEvent.click(document.body);

    expect(bentoBoard).not.toHaveClass("flex");
  });
});
