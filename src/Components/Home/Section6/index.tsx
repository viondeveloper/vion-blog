import React, { FC } from "react";
import classes from "./section6.module.scss";
import Image from "next/image";

import AvatarMini from "../../../assets/img/avatar_mini_section6.png";

const Section6: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.BottomSection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className={classes.elementor_shape_fill}
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      <div className={classes.TopSection}>
        <div className={classes.wrapTopSection}>
          <div className={classes.coverTopSection}>
            <div className={classes.siteItem}>
              <div className={classes.wrapItem}>
                <div className={classes.item1}>
                  <div className={classes.wrapItem1}>
                    <h5>Testimonials</h5>
                  </div>
                </div>
                <div className={classes.item2}>
                  <div className={classes.wrapItem2}>
                    <div className={classes.coverItem2}>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className={classes.item3}>
                  <div className={classes.wrapItem3}>
                    <h2>My Happy Clients!</h2>
                  </div>
                </div>
                <div className={classes.item4}>
                  <div className={classes.wrapItem4}>
                    <div className={classes.coverItem4}>
                      <div className={classes.contentTop}>
                        Aliquip quae scipit eros. Anim commodi maiores pharetra,
                        arcu incidunt, omnis iste incidunt cursus. Officia ea
                        numquam vivamus repellen. Minus fermentum litora.
                      </div>
                      <div className={classes.contentBot}>
                        <div className={classes.siteContent}>
                          <div className={classes.contentItemLeft}>
                            <Image
                              src={AvatarMini}
                              alt="image-avatar"
                              className={classes.avatarMini}
                            />
                          </div>
                          <div className={classes.contentItemRight}>
                            <div className={classes.textContent}>Deborah Sims</div>
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

export default Section6;
