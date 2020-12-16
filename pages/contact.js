import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";

function about() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Currently available for contract, part-time, or full-time job.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: ajengrf12@gmail.com</li>
              <li className="contact-item">Phone: +62 821 8348 1191</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
