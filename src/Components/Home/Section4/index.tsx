import React, { FC } from "react";
import classes from "./section4.module.scss";
import Image from "next/image";
import cx from "classnames";

import PA1 from "../../../assets/img/PA_Section4_1.png";
import PA2 from "../../../assets/img/PA_Section4_2.png";
import PA from "../../../assets/img/PA.png";
import PA6 from "../../../assets/img/PA_Section4_6.png";

const listImage = [
  {
    id: "img1",
    src: PA1,
  },
  {
    id: "img2",
    src: PA,
  },
  {
    id: "img3",
    src: PA6,
  },
  {
    id: "img4",
    src: PA2,
  },
];

const Section4: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection4}>
        <div className={classes.coverSection4}>
          {listImage.map((it) => (
            <div className={classes.item} key={it.id}>
              <div className={classes.wrapItem}>
                <div className={classes.coverItem}>
                  <div className={classes.wrapImage}>
                    <div className={classes.coverImage}>
                      <div className={classes.siteImage}>
                        <Image
                          src={it.src}
                          alt="image-beautiful-girl"
                          className={cx(classes.image, {
                            [classes.image1]: it.id === "img1",
                            [classes.image2]: it.id === "img2",
                            [classes.image3]: it.id === "img3",
                            [classes.image4]: it.id === "img4",
                          })}
                        />
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

export default Section4;
