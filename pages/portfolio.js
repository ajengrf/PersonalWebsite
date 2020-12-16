import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";

function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/camera.webp" className="portfolio-image" />
                <h4 className="portfolio-name">Camera Store</h4>
                <div className="portfolio-category">Mobile Application</div>
              </div>
              <div className="portfolio-item">
                <img src="/booking.webp" className="portfolio-image" />
                <h4 className="portfolio-name">Booking Apps</h4>
                <div className="portfolio-category">Mobile Application</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default portfolio;
