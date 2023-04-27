import React, { FC } from "react";
import classes from "./home.module.scss";
import Banner from "./Banner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const HomePage: FC = () => {
  return (
    <div className={classes.Container}>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default HomePage;
