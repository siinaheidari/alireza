import Header from "@/app/components/header";

import AboutMe from "@/app/components/about";

import WorkExperience from "@/app/components/work-experience";
import Skills from "@/app/components/skills";
import Education from "@/app/components/education";
import Teaching from "@/app/components/teaching";
import Projects from "@/app/components/projects";
import Certificates from "@/app/components/certificates";

export default function Home() {
  return (
      <div className="">
        <Header/>
        <AboutMe/>
        <WorkExperience/>
        <Skills/>
        <Education/>
        <Teaching/>
        <Projects/>
        <Certificates/>

      </div>
  );
}
