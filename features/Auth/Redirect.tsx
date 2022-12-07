import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "./Queries";

const Redirect: React.FunctionComponent = () => {
  const router = useRouter();
  const [text, setText] = useState("Loading...");
  const { id_token } = router.query;
  const accessToken = String(id_token);

  console.log(accessToken);

  const { data, isSuccess, isError, error, isLoading } =
    useGoogleLogin(accessToken);

  if (isLoading) {
    return <div></div>;
  }

  if (isSuccess) {
    setTimeout(() => router.push("/"), 3000);
    setText(
      "Successfully logged in. You wii be redirected in a few seconds..."
    );
  }

  if (isError) {
    console.log(error);
    setText("An error occurred. please see your developer console.");
  }

  return <>{text}</>;
};

export default Redirect;
