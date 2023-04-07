import { FC } from "react";
import classes from "./home.module.scss";
import Header from "@/Components/Header";

const HomePage: FC = () => {
  return <div className={classes.Container}>
    <Header />
  </div>;
};

export default HomePage;
