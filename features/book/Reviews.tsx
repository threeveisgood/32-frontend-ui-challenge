import { useReviews } from "../../features/book/Queries";

const Reviews = () => {
  const { isLoading, error, isFetching, data: reviews } = useReviews();

  if (isLoading) return <div>로딩 중...</div>;

  if (error instanceof Error)
    return <div>에러가 발생하였습니다: {error.message}</div>;

  return (
    <>
      <div>
        {reviews && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.text}</p>
                <p>{review.author}</p>
              </li>
            ))}
          </ul>
        )}
        <div>{isFetching ? "업데이트 중..." : ""}</div>
      </div>
    </>
  );
};

export default Reviews;
