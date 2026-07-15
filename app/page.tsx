import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Hiro from "../component/hiro";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-white">
     <Navbar />
     <Hiro ></Hiro>
     

  
      </main>
      <Footer />
    </>
  );
}