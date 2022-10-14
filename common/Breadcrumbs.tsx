import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <div className="flex">
        {crumbs &&
          crumbs.map((crumb) => {
            let name = crumb.split("/").at(-1);
            return (
              <div key={crumb} className="px-3">
                <Link href={crumb}>
                  <a>{name}</a>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Breadcrumbs;
