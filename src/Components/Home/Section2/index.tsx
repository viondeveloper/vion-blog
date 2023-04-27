import React, { FC } from "react";
import classes from "./section2.module.scss";
import Image from "next/image";
import Link from "next/link";

import ModalImage from "../../../assets/img/PA4.png";
import ArrowRight from "../../../assets/icon/ic_arrow_right_white.svg";

const Section2: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection2}>
        <div className={classes.coverSection2}>
          <div className={classes.itemLeft}>
            <div className={classes.coverItemLeft}>
              <div className={classes.wrapItemLeft}>
                <div className={classes.siteItemLeft}>
                  <div className={classes.contentItemLeft}>
                    <div className={classes.wrapImageLeft}>
                      <Image
                        src={ModalImage}
                        alt="image-beautiful-girl"
                        className={classes.ModalImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.itemRight}>
            <div className={classes.coverItemRight}>
              <div className={classes.wrapItemRight}>
                <div className={classes.itemFirst}>
                  <div className={classes.wrapItemFirst}>
                    <h3 className={classes.contentItemFirst}>
                      Discover Your Personal Style and the Confidence That Comes
                      with It.
                    </h3>
                  </div>
                </div>
                <div className={classes.itemSecond}>
                  <div className={classes.coverItemSecond}>
                    <p className={classes.contentItemSecond}>
                      Tempora aliqua cillum accusamus aperiam pharetra cupidatat
                      fermentum viverra delectus quidem incidunt tempus itaque
                      quam, id blandit dolores, proin reiciendis. Nostrum proin
                      sem veniam veritatis inceptos!
                    </p>
                  </div>
                </div>
                <div className={classes.itemThird}>
                  <div className={classes.coverItemThird}>
                    <div className={classes.contentItemThird}>
                      <Link href={"#"} className={classes.linkReadMore}>
                        <span className={classes.wrapContent}>
                          <span className={classes.wrapArrow}>
                            <Image
                              src={ArrowRight}
                              alt="arrow-right"
                              priority
                              className={classes.arrowRight}
                            />
                          </span>
                          <span className={classes.textReadMore}>
                            Read More
                          </span>
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
  );
};

export default Section2;
