import React from "react";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <section className="w-full min-h-screen">
      <PageHeader
        title="About Us"
        breadcrumb="Home"
        breadcrumbLink="/about"
        backgroundImage="/images/about.png"
        backgroundColor="bg-brand-primary-400"
      />
    </section>
  );
};

export default About;
