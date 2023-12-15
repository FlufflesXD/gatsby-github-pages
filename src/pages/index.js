import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="VEFMAC" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Us" />
        <InterestsSection sectionId="Instructors" heading="Instructors and Team Members" />
        <ProjectsSection sectionId="Classes" heading="Classes / Schedule" />
        <ContactSection sectionId="Contact" heading="Issues?" />
      </Page>
    </>
  );
}
