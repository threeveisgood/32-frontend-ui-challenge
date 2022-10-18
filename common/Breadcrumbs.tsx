import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs: React.FunctionComponent = () => {
  const router = useRouter();

  const bread = router.asPath.split("/");
  let crumbs = [];
  let link = "";

  for (let i = 1; i < bread.length; i++) {
    for (let j = 0; j <= bread.indexOf(bread[i]); j++) {
      link = link + bread[j] + "/";
    }
    link = link.slice(0, -1);
    crumbs.push(link);
    link = "";
  }

  return (
    <>
      <ul className="flex justify-center mt-7">
        {crumbs &&
          crumbs.map((crumb, index) => {
            const name = crumb.split("/").at(-1);
            return (
              <li key={crumb} className="flex items-center px-1">
                {index != 0 ? (
                  <div className="mr-2">
                    <MdKeyboardArrowRight />
                  </div>
                ) : null}
                <Link href={crumb}>
                  <a>{name}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Breadcrumbs;
