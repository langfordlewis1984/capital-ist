import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import Country from "../../components/Country/Country";
import Main from "../../components/Main/Main";
import Modal from "../../components/Modal/Modal";
import Panel from "../../components/Panel/Panel";
import Option from "../../components/Option/Option";
import Next from "../../components/Next/Next";

export default function Play() {
  return (
    <>
      <Helmet>
        <title>
          Who will reign <span>Capital-IST</span>
        </title>
        <meta
          name="description"
          content="This is the Game Page of Capital-IST"
        />
        <link rel="canonical" href="/capitalist" />
      </Helmet>
      <main>
        <Header />
        <Country />
        <Main />
        <Modal />
        <Panel />
        <Option />
        <Next />
      </main>
    </>
  );
}
