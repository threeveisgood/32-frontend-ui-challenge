import { AxiosError } from "axios";

type ErrorData = {
  message: {
    id: string;
    message: string;
  }[];
}[];

export type Error = AxiosError<{
  statusCode: number;
  error: string;
  message: ErrorData;
  data: ErrorData;
}>;
