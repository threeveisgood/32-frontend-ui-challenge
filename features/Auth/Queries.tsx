import { useMutation, useQuery } from "@tanstack/react-query";
import client from "../../lib/client";
import { setJwtToken, setUsername } from "../../lib/storage";
import { LoginParams, RegisterParams, RegisterResult } from "../../types/auth";
import { Error } from "../../types/error";
import toast from "react-hot-toast";

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
      console.log("User profile", data.user);
      console.log("User token", data.jwt);
      setJwtToken(data.jwt);
      setUsername(data.user.username);
    },
    onError: (error: Error) => {
      console.log("에러가 발생하였습니다.:", error.response);
    },
  });

  return mutation;
}

// google provider login

const fetchGoogleLogin = async (token: string): Promise<RegisterResult> => {
  const { data } = await client.get(
    `http://localhost:1337/api/auth/google/callback?access_token=${token}`
  );

  return data;
};

export const useGoogleLogin = (token: string) => {
  return useQuery(["googleLogin", token], () => fetchGoogleLogin(token), {
    onSuccess: () => {},
    onError: (error: Error) => {
      toast.error("에러가 발생하였습니다.: " + error.message);
    },
  });
};
