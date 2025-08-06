import React from "react";
import HeroSection from "../components/heroSection.jsx";
import About from "../components/about.jsx";
import Qualities from "../components/Qualities.jsx";
import Menu from "../components/menu.jsx";
import WhoAreWe from "../components/whoAreWe.jsx";
import Team from "../components/team.jsx";
import { Reservation } from "../components/reservation.jsx";
import Footer from "../components/Footer.jsx";
import { NotFound } from "./notFound.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
}
