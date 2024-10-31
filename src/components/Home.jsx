import React from "react";
import HeroSection from "./Home/HeroSection";
import ProblemSection from "./Home/ProblemSection";
import SolutionSection from "./Home/SolutionSection";
import ResultSection from "./Home/ResultSection";
import ClientSection from "./Home/ClientSection";
import ServiceSection from "./Home/ServiceSection";
import IndustrySection from "./Home/IndustrySection";
import WorkSection from "./Home/WorkSection";
import TestimonialSection from "./Home/TestimonialSection";
import BookSection from "./Home/BookSection";
import CompanySection from "./Home/CompanySection";

const Home = () => {
  return (
    <>
      <div className="w-full bg-[#FBFBFC]">
        <HeroSection />

        <ProblemSection />

        <SolutionSection />

        <ResultSection />

        <ClientSection />

        <ServiceSection />

        <IndustrySection />

        <WorkSection />

        <TestimonialSection />

        <BookSection />

        <CompanySection />
      </div>
    </>
  );
};

export default Home;
