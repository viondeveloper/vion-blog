import { FC } from "react";
import classes from "./home.module.scss";
import HomeBanner from "../../assets/img/PA2.png";

const HomePage: FC = () => {
  return (
    <div className={classes.Container}>
      <div
        className={classes.sectionBannerImg}
        style={{ backgroundImage: `url(${HomeBanner.src})` }}
      >
        <div className={classes.setContent}></div>
      </div>
    </div>
  );
};

export default HomePage;
