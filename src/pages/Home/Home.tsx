import "./Home.module.css"
import Header from "../../reusable_sections/Header"
import Hero from "./sections/Hero"
import Timeline from "./sections/Timeline"
import FacultyExperience from "./sections/FacultyExperience"
import Achievements from "./sections/Achievments"
import Leadership from "./sections/Leadership"
import Projects from "./sections/Projects"
import SkillEvolution from "./sections/SkillEvolution"
import Memories from "./sections/Memories"
import Transformation from "./sections/Transformation"
import Statistics from "./sections/Statistics"
import Future from "./sections/Future"
import Contact from "./sections/Contact"
import Footer from "../../reusable_sections/Footer"


export default function HomePage() {

  return (
    <div>
      <Header />
      <Hero />
      <Timeline />
      <FacultyExperience />
      <Achievements />
      <Leadership />
      <Projects />
      <SkillEvolution />
      <Memories />
      <Transformation />
      <Statistics />
      <Future />
      <Contact />
      <Footer />
    </div>
  )
}
