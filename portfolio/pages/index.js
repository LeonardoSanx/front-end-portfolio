import Head from "next/head";
import Image from "next/image";
import Homestyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={Homestyles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="FrontEnd Portfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="./weather-app">weather</a>
    </div>
  );
}
