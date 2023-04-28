import React, { FC } from "react";
import classes from "./section5.module.scss";

import Fig1 from "../../../assets/img/figure1_section5.png";
import Fig2 from "../../../assets/img/figure2_section5.png";
import Fig3 from "../../../assets/img/figure3_section5.png";
import Image from "next/image";

const listItem = [
  {
    id: "item1",
    title: "Wardrobe Styling",
    content:
      "Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus",
    image: Fig1,
  },
  {
    id: "item2",
    title: "Closet Cleanse",
    content:
      "Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus",
    image: Fig2,
  },
  {
    id: "item3",
    title: "Shopping Tour",
    content:
      "Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus",
    image: Fig3,
  },
];

const Section5: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection5}>
        <div className={classes.coverSection5}>
          {listItem.map((it) => (
            <div className={classes.item} key={it.id}>
              <div className={classes.wrapItem}>
                <div className={classes.coverItem}>
                  <div className={classes.siteContent}>
                    <div className={classes.wrapContent}>
                      <div className={classes.coverContent}>
                        <figure className={classes.wrapImage}>
                          <Image
                            src={it.image}
                            alt="image-number"
                            className={classes.figNumber}
                          />
                        </figure>
                        <div className={classes.contentRight}>
                          <h3>{it.title}</h3>
                          <p>{it.content}</p>
                        </div>
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

export default Section5;
