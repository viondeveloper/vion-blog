import React, { FC, useCallback } from "react";
import classes from "./header.module.scss";
import Image from "next/image";
import fb_icon from "../../assets/icon/ic_fb.svg";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.header}>
        <div className={classes.wrapRow}>
          <div className={classes.itemLeft}>
            <Link
              href={`https://www.facebook.com/minhhiep.deptrai`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={fb_icon} alt="" className={classes.icFb} />
            </Link>
            <div className={classes.title}>
              <Link
                href={`https://www.facebook.com/minhhiep.deptrai`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Nguyễn Minh Hiệp - Front-end Developer
              </Link>
            </div>
          </div>
          <div className={classes.itemRight}>
            <div>Home</div>
            <div>Blogs</div>
            <div>About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
