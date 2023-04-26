import { renderHook, waitFor } from "@testing-library/react";
import { createWrapper } from "../../mocks/utils";
import { server } from "../../mocks/server";
import { rest } from "msw";
import { useReviews } from "../../features/book/Queries";
import "@testing-library/jest-dom";

describe("query reviews hook", () => {
  test("successful reviews query hook", async () => {
    const { result } = renderHook(() => useReviews(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual([
      {
        author: "marol",
        id: "1",
        text: "good vibes only",
      },
    ]);
  });

  test("failure reviews query hook", async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result } = renderHook(() => useReviews(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
