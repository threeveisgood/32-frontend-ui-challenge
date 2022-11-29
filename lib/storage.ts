import { getCookie, setCookie, deleteCookie, hasCookie } from "cookies-next";

export const setJwtToken = (jwtToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return setCookie("jwt_token", jwtToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return getCookie("jwt_token");
};

export const removeCookieToken = () => {
  return deleteCookie("jwt_token", { sameSite: "strict", path: "/" });
};

export const isCookieToken = () => {
  return hasCookie("jwt_token");
};
