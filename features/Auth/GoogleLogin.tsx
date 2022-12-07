import * as React from "react";
import Link from "next/link";

interface IGoogleLoginProps {}

const GoogleLogin: React.FunctionComponent<IGoogleLoginProps> = (props) => {
  return (
    <>
      <Link href={`http://localhost:1337/api/connect/google`}>
        <button className="w-36">Connect to google</button>
      </Link>
    </>
  );
};

export default GoogleLogin;
