import { FC } from "react";
import classes from "./home.module.scss";
import HomeBanner from "../../assets/img/PA2.png";
import Link from "next/link";

const HomePage: FC = () => {
  return (
    <div className={classes.Container}>
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
                        <Link href={'#'} ><span>Read More</span></Link>
                      </div>
                    </div>
                  </div>
                  <div className={classes.itemRight}>Watch Video</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
