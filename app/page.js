import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <AboutUs />
      <Blog />
      <Contacts />
      <Projects />
      <Services />
    </div>
  );
}

