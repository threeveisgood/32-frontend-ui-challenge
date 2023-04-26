import { render, screen } from "@testing-library/react";
import Accordian from "../common/Accordian";
import "@testing-library/jest-dom";

describe("<Accordian />", () => {
  it("accordian test", () => {
    render(<Accordian />);

    const AccordianText = screen.getByText("Accordian 1");

    expect(AccordianText).toBeInTheDocument();
  });
});
