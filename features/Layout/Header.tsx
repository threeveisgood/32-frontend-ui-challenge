import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  getCookieToken,
  isCookieToken,
  removeCookieToken,
} from "../../lib/storage";

const Header: React.FunctionComponent = () => {
  const router = useRouter();
  const [isAuth, setAuth] = useState(false);
  const token = getCookieToken();

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  const handleLogOutClick = () => {
    window.location.reload();
    removeCookieToken();
  };

  useEffect(() => {
    setAuth(isCookieToken);
  }, [token]);

  return (
    <>
      <header className="flex justify-center w-full text-gray-200 min-h-15 top-0 z-10 px-12">
        <nav className="flex justify-between mt-3 items-center relative w-full z-12">
          <div className="flex items-center">
            <Link href="/">Training App</Link>
          </div>
          <div className="flex items-center">
            <ol className="flex justify-between items-center p-0 m-0 list-none">
              <li className="mx-[5px] relative text-base">
                {isAuth ? (
                  <div className="cursor-pointer" onClick={handleLogOutClick}>
                    로그아웃
                  </div>
                ) : (
                  <div className="cursor-pointer" onClick={handleLoginClick}>
                    로그인
                  </div>
                )}
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
