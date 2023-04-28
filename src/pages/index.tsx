import Head from "next/head";
import HomePage from "../Components/Home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vion Nguyen - Blog and About Me</title>
        <meta
          name="description"
          content="Hi everybody, I am Nguyen Minh Hiep - Vion Nguyen"
        />
        <meta property="title" content="Welcome, I’m glad you’re here" />
        <meta
          property="og:description"
          content="Hi everybody, I am Nguyen Minh Hiep - Vion Nguyen. Programming is my life and I am a Front-end Developer"
        />
        <meta name="author" content="Nguyen Minh Hiep" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
