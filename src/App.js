import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import DrNabeelaShahid from "./DrNabeelaShahid";
import Services from "./Services";
import RecoveryRate from "./RecoveryRate";
import BookAppointment from "./BookAppointment";

import Contact from "./Contact";
import MapEmbed from "./MapEmbed";
import Footer from "./Footer";

function App() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang(lang === "en" ? "ur" : "en");

  return (
    <>
      <Header lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <DrNabeelaShahid lang={lang} />
      <Services lang={lang} />
      <RecoveryRate />
      <BookAppointment />

      <Contact lang={lang} />
      <MapEmbed />
      <Footer />
    </>
  );
}

export default App;
