import React, { FC } from "react";
import classes from "./section7.module.scss";

import logo1 from "../../../assets/img/logo1_section7.png";
import logo2 from "../../../assets/img/logo2_section7.png";
import logo3 from "../../../assets/img/logo3_section7.png";
import logo4 from "../../../assets/img/logo4_section7.png";
import logo5 from "../../../assets/img/logo5_section7.png";
import logo6 from "../../../assets/img/logo6_section7.png";
import Image from "next/image";

const listImage = [
  {
    id: "img1",
    src: logo1,
  },
  {
    id: "img2",
    src: logo2,
  },
  {
    id: "img3",
    src: logo3,
  },
  {
    id: "img4",
    src: logo4,
  },
  {
    id: "img5",
    src: logo5,
  },
  {
    id: "img6",
    src: logo6,
  },
];

const Section7: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection7}>
        <div className={classes.coverSection7}>
          {listImage.map((it) => (
            <div className={classes.item} key={it.id}>
              <div className={classes.wrapItem}>
                <div className={classes.coverItem}>
                  <div className={classes.siteItem}>
                    <div className={classes.contentItem}>
                      <div className={classes.coverContent}>
                        <Image src={it.src} alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
