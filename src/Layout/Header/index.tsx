import React, { FC, useCallback, useMemo, useState } from "react";
import classes from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import logo from "../../assets/img/kara-logo-free.svg";
import IconFb from "../../assets/icon/ic_facebook.svg";
import IconIns from "../../assets/icon/ic_instagram.svg";
import IconLinkedin from "../../assets/icon/ic_linkedin.svg";
import { useRouter } from "next/router";

const listMenuHeader = [
  {
    id: "home",
    name: "Home",
    url: "/",
  },
  {
    id: "blog",
    name: "Blog",
    url: "/blog",
  },
  {
    id: "contact",
    name: "Contact",
    url: "/contact",
  },
];

const listIconContact = [
  {
    id: "icFb",
    alt: "icon-facebook",
    src: IconFb,
    url: "https://facebook.com/minhhiep.deptrai",
  },
  {
    id: "icIns",
    alt: "icon-instagram",
    src: IconIns,
    url: "https://instagram.com/vion.ng99",
  },
  {
    id: "icLinkedin",
    alt: "icon-linkedin",
    src: IconLinkedin,
    url: "https://linkedin.com/in/vion-nguyen-0965a4266",
  },
];

const Header: FC = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const { asPath } = useRouter();
  const handleLinkClick = useCallback((link: string) => {
    setSelectedLink(link);
  }, []);

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
                            <Link
                              href={it.url}
                              onClick={() => handleLinkClick(it.id)}
                              className={cx(
                                selectedLink === it.id ? classes.selected : "",
                                asPath === "/"
                                  ? it.id === "home"
                                    ? classes.default
                                    : ""
                                  : ""
                              )}
                            >
                              {it.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classes.menuRight}>
                  <div className={classes.wrapMenu}>
                    {listIconContact.map((it) => (
                      <Link
                        href={it.url}
                        target="blank"
                        rel="noopener noreferrer"
                        key={it.id}
                        className={cx({
                          [classes.linkFb]: it.id === "icFb",
                          [classes.linkIns]: it.id === "icIns",
                          [classes.linkLinkedin]: it.id === "icLinkedin",
                        })}
                      >
                        <span>
                          <Image
                            src={it.src}
                            alt={it.alt}
                            className={cx({
                              [classes.icFb]: it.id === "icFb",
                              [classes.icIns]: it.id === "icIns",
                              [classes.icLinkedin]: it.id === "icLinkedin",
                            })}
                          />
                        </span>
                      </Link>
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
