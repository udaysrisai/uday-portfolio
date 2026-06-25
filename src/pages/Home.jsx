import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ onViewResume }) {
  return (
    <main>
      <Hero onViewResume={onViewResume} />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
