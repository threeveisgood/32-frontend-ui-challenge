import { useMutation } from "@tanstack/react-query";
import client from "../../lib/client";
import { LoginParams, RegisterParams, RegisterResult } from "../../types/auth";
import { Error } from "../../types/error";

export async function register(params: RegisterParams) {
  const { data } = await client.post<RegisterResult>(
    "/api/auth/local/register",
    params
  );

  return data;
}

export function useRegister() {
  const mutation = useMutation(register, {
    onSuccess: (data) => {
      console.log("Well done!");
      console.log("User profile", data.user);
      console.log("User token", data.jwt);
    },
    onError: (error: Error) => {
      console.log("An error occurred:", error.response);
    },
  });

  return mutation;
}

export async function login(params: LoginParams) {
  const { data } = await client.post<RegisterResult>("/api/auth/local", params);

  return data;
}

export function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      console.log("Well done!");
      console.log("User profile", data.user);
      console.log("User token", data.jwt);
    },
    onError: (error: Error) => {
      console.log("An error occurred:", error.response);
    },
  });

  return mutation;
}
