import { useQuery } from "@tanstack/react-query";
import { Review } from "../../mocks/type";
import axios from "axios";

const fetchReviews = async () => {
  const { data } = await axios.get<Review[]>("/reviews");

  return data;
};

export function useReviews() {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });
}
