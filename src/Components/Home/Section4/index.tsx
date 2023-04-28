import React, { FC } from "react";
import classes from "./section4.module.scss";
import Image from "next/image";
import cx from "classnames";

import modal1 from "../../../assets/img/model1_section4.png";
import modal2 from "../../../assets/img/model2_section4.png";
import modal3 from "../../../assets/img/model3_section4.png";
import modal4 from "../../../assets/img/model4_section4.png";

const listImage = [
  {
    id: "img1",
    src: modal1,
  },
  {
    id: "img2",
    src: modal2,
  },
  {
    id: "img3",
    src: modal3,
  },
  {
    id: "img4",
    src: modal4,
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
                          priority
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
