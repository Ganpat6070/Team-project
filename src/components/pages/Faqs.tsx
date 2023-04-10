import React from "react";
import NavbarHead from "../navbar";
import Footer from "./footer";

const Faqs = () => {
  return (
    <>
      <NavbarHead />

      <h1 className="text-left m-4 p-3 font-weight-normal">FAQs</h1>
      <div className="p-3 m-4 bg-light border">
        <p className="text-left">
          PerfectMatch.com is a matrimonial website with a difference. We
          understand how special Indian weddings are. We understand the Indian
          bride and the Indian groom, we understand how your partner search is
          different and special. We are committed to supporting your search for
          your soulmate. We are a platform of like minded families, a community
          bound by its commonalities. We understand that just as the bride and
          groom are searching for their perfect other half, so are their
          families. A common value. A common belief. A common need. We are
          committed to that something special that defines Indian marriages, we
          are where families find each other.{" "}
        </p>
        <p className="text-left">
          Welcome to the fastest growing matrimonial website, which dedicates
          itself to finding your perfect partner. Welcome to the platform
          through which already hundreds of thousands of them have sought
          relationships, found them, and committed themselves to them.{" "}
        </p>
        <p className="text-left">
          Where you’ll find an easy-to-use interface, an authenticated database,
          user-friendly online matching tools, and a built-in horoscope
          generator.{" "}
        </p>
        <p className="text-left">
          Plus of course, high-safety features that protect your privacy and
          security during the entire partner search.{" "}
        </p>
        <p className="text-left">
          Welcome to an unmatched pleasure of match-making.
        </p>
        <p className="text-left">Welcome to PerfectMatch.com</p>
      </div>
      <Footer/>
    </>
  );
};

export default Faqs;
