import { getContent } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchInterests from "@/components/ResearchInterests";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OngoingResearch from "@/components/OngoingResearch";
import Achievements from "@/components/Achievements";
import FAQ from "@/components/FAQ";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const content = await getContent();

  return (
    <>
      <Navbar
        navigation={content.navigation}
        brandShort={content.siteMeta?.brandShort}
        brandRest={content.siteMeta?.brandRest}
      />
      <main>
        <Hero content={content} />
        <About about={content.about} />
        <ResearchInterests researchInterests={content.researchInterests} />
        <Education education={content.education} />
        <Experience experience={content.experience} />
        <Publications publications={content.publications} />
        <Skills skills={content.skills} />
        <Projects projects={content.projects} previousProjects={content.previousProjects} />
        <OngoingResearch ongoingResearch={content.ongoingResearch} />
        <Achievements achievements={content.achievements} />
        <FAQ faq={content.faq} />
        <References references={content.references} />
        <Contact contact={content.contact} />
      </main>
      <Footer footer={content.footer} siteMeta={content.siteMeta} />
    </>
  );
}
