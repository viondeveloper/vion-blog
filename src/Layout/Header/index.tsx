import React, { FC, useCallback } from "react";
import classes from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import logo from "../../assets/img/kara-logo-free.svg";
import IconFb from "../../assets/icon/ic_facebook.svg";
import IconIns from "../../assets/icon/ic_instagram.svg";
import IconLinkedin from "../../assets/icon/ic_linkedin.svg";

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
    id: 1,
    name: "Contact",
    url: "/contact",
  },
];

const listIconContact = [
  {
    id: "ic1",
    alt: "icon-facebook",
    src: IconFb,
    url: "https://facebook.com/minhhiep.deptrai",
  },
  {
    id: "ic2",
    alt: "icon-instagram",
    src: IconIns,
    url: "https://instagram.com/vion.ng99",
  },
  {
    id: "ic3",
    alt: "icon-linkedin",
    src: IconLinkedin,
    url: "https://linkedin.com/in/vion-nguyen-0965a4266",
  },
];

const Header: FC = () => {
  return (
    <div className={classes.siteHeader}>
      <div className={classes.mainHeaderWrap}>
        <div className={classes.primaryHeaderBar}>
          <div className={classes.header}>
            <div className={classes.wrapRow}>
              <div className={classes.sectionLeft}>
                <div className={classes.itemLeft}>
                  <div className={classes.focusItemLeft}>
                    <span>
                      <Link href={`/`} className={classes.customLogoLink}>
                        <Image
                          src={logo}
                          alt=""
                          className={classes.logo}
                          priority
                        />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className={classes.sectionRight}>
                <div className={classes.menuLeft}>
                  <div className={classes.coverMenuLeft}>
                    <div className={classes.navLeft}>
                      <ul className={classes.listUl}>
                        {listMenuHeader.map((it) => (
                          <li key={it.id}>
                            <Link href={it.url}>{it.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classes.menuRight}>
                  <div className={classes.wrapMenu}>
                    {listIconContact.map((it) => (
                      <a
                        href={it.url}
                        target="blank"
                        rel="noopener noreferrer"
                        key={it.id}
                        className={cx({
                          [classes.linkFb]: it.id === "ic1",
                          [classes.linkIns]: it.id === "ic2",
                          [classes.linkLinkedin]: it.id === "ic3",
                        })}
                      >
                        <span>
                          <Image
                            src={it.src}
                            alt={it.alt}
                            priority
                            className={cx({
                              [classes.icFb]: it.id === "ic1",
                              [classes.icIns]: it.id === "ic2",
                              [classes.icLinkedin]: it.id === "ic3",
                            })}
                          />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
