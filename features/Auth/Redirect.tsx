import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { setJwtToken, setUsername } from "../../lib/storage";
import { useGoogleLogin } from "./Queries";

const Redirect: React.FunctionComponent = () => {
  const router = useRouter();
  const { access_token } = router.query;
  const [token, setToken] = useState("");
  const [text, setText] = useState("로딩 중...");

  const { data, isLoading, isError } = useGoogleLogin(token);

  useEffect(() => {
    if (router.isReady) {
      setToken(String(access_token));

      if (isLoading) {
        setText("로딩 중입니다...");
      }

      if (data) {
        setJwtToken(data.jwt);
        setUsername(data.user.username);
        setText("성공적으로 로그인하였습니다. 몇초 후 리다이렉트 됩니다.. ");
        setTimeout(() => router.push("/"), 3000);
      }

      if (isError) {
        setText("에러가 발생하였습니다.");
      }
    }
  }, [data, isLoading, isError, router, access_token]);

  return <p>{text}</p>;
};

export default Redirect;
