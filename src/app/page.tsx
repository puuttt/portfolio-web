import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollScale from "@/components/ScrollScale";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <ScrollScale>
        <Hero />
      </ScrollScale>
      <ScrollScale>
        <About />
      </ScrollScale>
      <ScrollScale>
        <Projects />
      </ScrollScale>
      <ScrollScale>
        <Testimonials />
      </ScrollScale>
      <ScrollScale>
        <Services />
      </ScrollScale>
      <ScrollScale>
        <Process />
      </ScrollScale>
      <ScrollScale>
        <Footer />
      </ScrollScale>
    </main>
  );
}
