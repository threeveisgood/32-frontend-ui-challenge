import { rest } from "msw";
import { Book, Review } from "./type";

export const handlers = [
  rest.get("https://my.backend/book", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Book>({
        title: "book 1",
        description: "booooook",
      })
    );
  }),
  rest.get("/reviews", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Review[]>([
        {
          id: "1",
          author: "marol",
          text: "good vibes only",
        },
      ])
    );
  }),
];
