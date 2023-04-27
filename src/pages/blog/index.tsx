import React from "react";
import classes from "./blog-home-page.module.scss";
import { NextPage } from "next";

const BlogHomePage: NextPage = () => {
  return <div className={classes.Container}>
    <div>Blog</div>
  </div>;
};

export default BlogHomePage;
