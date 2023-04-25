import React, { FC } from "react";
import classes from "./footer.module.scss";
import cx from "classnames";
import Link from "next/link";

const listMenuHeader = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
];

const Footer: FC = () => {
  return (
    <div className={classes.siteFooter}>
      <div className={classes.coverFooter}>
        <div>
          <div className={classes.wrapRowItem}>
            <div className={classes.coverItemLeft}>
              <div className={classes.itemLeft}>
                <p>Copyright © 2023 Vion Nguyen - Blog and About Me</p>
              </div>
            </div>
            <div className={classes.coverItemRight}>
              <nav className={classes.navCover}>
                <div className={classes.coverItem}>
                  <ul className={classes.ulWrapItem}>
                    {listMenuHeader.map((it) => (
                      <li key={it.id}>
                        <Link
                          href={it.url}
                          className={cx({
                            [classes.Home]: it.id === 1,
                            [classes.Blog]: it.id === 2,
                            [classes.Contact]: it.id === 3,
                          })}
                        >
                          {it.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
