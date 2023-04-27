import React, { FC } from "react";
import classes from "./banner.module.scss";
import Link from "next/link";
import Image from "next/image";

import HomeBanner from "../../../assets/img/PA3.png";
import IcArrow from "../../../assets/icon/ic_arrow_right.svg";
import ICPlay from "../../../assets/icon/play-circle.svg";

const Banner: FC = () => {
  return (
    <div
      className={classes.sectionBannerImg}
      style={{ backgroundImage: `url(${HomeBanner.src})` }}
    >
      <div className={classes.overWriteBg}></div>
      <div className={classes.setContent}>
        <div className={classes.rowContent}>
          <div className={classes.content}>
            <div className={classes.itemTop}>
              <div className={classes.coverItemTop}>
                <h2 className={classes.titleTop}>Let’s Create Your…</h2>
              </div>
            </div>
            <div className={classes.itemSec}>
              <div className={classes.coverItemSec}>
                <h1 className={classes.titleSec}>Own Style with K.A.R.A.!</h1>
              </div>
            </div>
            <div className={classes.itemBottom}>
              <div className={classes.wrapItem}>
                <div className={classes.itemLeft}>
                  <div className={classes.coverItemLeft}>
                    <div className={classes.wrapItemLeft}>
                      <div className={classes.contentItemLeft}>
                        <div>
                          <Link href={"#"}>
                            <span>
                              Read More
                              <Image
                                src={IcArrow}
                                alt="icon-arrow-right"
                                className={classes.arrowRight}
                                priority
                              />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.itemRight}>
                  <div className={classes.coverItemRight}>
                    <div className={classes.wrapItemRight}>
                      <div className={classes.contentItemRight}>
                        <div className={classes.eleItemRight}>
                          <div>
                            <Link href={"#"} className={classes.linkItemRight}>
                              <span className={classes.wrapTextLink}>
                                <Image
                                  src={ICPlay}
                                  alt="icon-play"
                                  className={classes.iconPlay}
                                  priority
                                />
                                <span>Watch Video</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Banner;
