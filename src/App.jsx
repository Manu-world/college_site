import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitile="OUR PROGRAMS" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitile="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitile="TESTIMONIALS" title="What Our Student Says" />
        <Testimonials />
        <Title subTitile="CONTACT US" title="Get in Touch" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
