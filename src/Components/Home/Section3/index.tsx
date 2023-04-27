import React, { FC } from "react";
import classes from "./section3.module.scss";

const Section3: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.wrapSection3}>
        <div className={classes.coverSection3}>
          <div className={classes.wrapContent}>
            <div className={classes.wrapItem}>
              <div className={classes.contentItem}>
                <div className={classes.itemTop}>
                  <div className={classes.wrapItemTop}>
                    <h5 className={classes.contentTop}>
                      Services for All Age Women
                    </h5>
                  </div>
                </div>
                <div className={classes.itemBot}>
                  <div className={classes.wrapItemBot}>
                    <h2 className={classes.contentBot}>
                      I Love to Help People Feel Great about How They Look.
                    </h2>
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

export default Section3;
