import About from "@/components/about";
import Intro from "@/components/intro";
import Contact from "@/components/contact";

export default function Main() {
  return (
    <div>
      <Intro />
      <About />
      <div className="bg-base-200 h-5"></div>
      <Contact />
    </div>
  );
}
