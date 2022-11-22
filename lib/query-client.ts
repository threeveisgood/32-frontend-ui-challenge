import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // background error가 발생했을 때 실행됩니다.
      if (query.state.data !== undefined) {
        toast.error(`에러가 발생하였습니다: ${error}`);
      }
    },
  }),
});
