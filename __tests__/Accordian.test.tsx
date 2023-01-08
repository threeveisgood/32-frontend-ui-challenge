import { render } from "@testing-library/react";
import Accordian from "../common/Accordian";
import "@testing-library/jest-dom";

describe("<Accordian />", () => {
  it("accordian 1", () => {
    const { getByText } = render(<Accordian />);

    const AccordianText = getByText(/Accordian 1/i);

    expect(AccordianText).toBeInTheDocument();
  });
});
