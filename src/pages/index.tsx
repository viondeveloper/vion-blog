import Head from "next/head";
import HomePage from "./Home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vion Nguyen - Blog and About Me</title>
        <meta name="description" content="Hi everybody, I am Nguyen Minh Hiep - Vion Nguyen" />
        <meta name="og:description" content="Programming is my life" />
        <meta name="author" content="Nguyen Minh Hiep" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
