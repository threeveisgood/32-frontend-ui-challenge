import Reviews from "../../features/book/Reviews";
import { server } from "../../mocks/server";
import { renderWithClient } from "../../mocks/utils";
import { rest } from "msw";
import "@testing-library/jest-dom";

describe("query Reviews component", () => {
  test("successful reviews query component", async () => {
    const result = renderWithClient(<Reviews />);

    expect(await result.findByText(/good vibes only/i)).toBeInTheDocument();
  });

  test("failure reviews query component", async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const result = renderWithClient(<Reviews />);

    expect(
      await result.findByText(/에러가 발생하였습니다/)
    ).toBeInTheDocument();
  });
});
