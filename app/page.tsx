
import Footer from "../components/Footer";
import About from "../components/About";
import Hiro from "../components/hiro";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
  

      <main className="min-h-screen ">
        <Hiro />
        <About />
        <Project />
      </main>

      <Footer />
    </>
  );
}