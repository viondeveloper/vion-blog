import React, { FC } from "react";
import classes from "./section1.module.scss";

const Section1: FC = () => {
  return (
    <div className={classes.Section1}>
      <div className={classes.cover}>
        <div className={classes.wrapContent}>
          <div className={classes.wrapItem}>
            <div className={classes.wrapItemTop}>
              <div className={classes.coverItemTop}>
                <h5>Great Style For Everyone</h5>
              </div>
            </div>
            <div className={classes.wrapItemBot}>
              <div className={classes.coverItemBot}>
                <h2>I Love to Help People Feel Great about How They Look.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
