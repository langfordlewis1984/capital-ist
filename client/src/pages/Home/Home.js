import React from "react";
import Name from "../../components/Name/Name";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Capital-ist</title>
        <meta
          name="description"
          contents="This is the homepage for Capital-ist"
        ></meta>
        <link rel="canonical" href="/home" />
      </Helmet>
      <main>
        <Name />
        <p>Think you know your capitals, huh?</p>
      </main>
    </>
  );
}
