import { useMutation, useQuery } from "@tanstack/react-query";
import client from "../../lib/client";
import { setJwtToken } from "../../lib/storage";
import { LoginParams, RegisterParams, RegisterResult } from "../../types/auth";
import { Error } from "../../types/error";

// local signup code

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
      console.log("User profile", data.user);
      console.log("User token", data.jwt);
    },
    onError: (error: Error) => {
      console.log("An error occurred:", error.response);
    },
  });

  return mutation;
}

// local login code

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
      setJwtToken(data.jwt);
    },
    onError: (error: Error) => {
      console.log("An error occurred:", error.response);
    },
  });

  return mutation;
}

// google provider login code

export async function googleLogin(access_token: string) {
  const { data } = await client.get(
    `http://localhost:1337/api/auth/google/callback${access_token}`
  );

  return data;
}

export function useGoogleLogin(access_token: string) {
  return useQuery(["googleProvider"], () => googleLogin(access_token), {
    onSuccess: (data) => {
      console.log("Well done!");
      console.log("User profile", data.user);
      console.log("User token", data.jwt);
      setJwtToken(data.jwt);
    },
    onError: (error: Error) => {
      console.log("An error occurred:", error.response);
    },
  });
}
