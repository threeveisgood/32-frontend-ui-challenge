import * as React from "react";
import Link from "next/link";

const GoogleLogin: React.FunctionComponent = () => {
  return (
    <>
      <Link href={`http://localhost:1337/api/connect/google`}>
        <button className="w-full flex justify-center">
          <img
            className="h-[60px]"
            src="/static/google_normal.png"
            alt="google_login"
          />
        </button>
      </Link>
    </>
  );
};

export default GoogleLogin;
