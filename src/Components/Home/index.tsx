import { FC } from "react";
import classes from "./home.module.scss";

const HomePage: FC = () => {
  return <div className={classes.Container}>
    <div id="content" className={classes.siteContent}>
      <div className={classes.Container}>Home</div>
    </div>
  </div>;
};

export default HomePage;
