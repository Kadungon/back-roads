import React from "react";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import Service from "./components/service/service.component";
import Feature from "./components/feature/feature.component";
import Contact from "./components/contact/contact.component";
import Gallery from "./components/gallery/gallery.component";
import Footer from "./components/footer/footer.component";
import NavBar from "./components/nav/nav.component";
function App() {
  return (
    <React.Fragment>
      <header id="home">
        <NavBar />
        <Hero />
      </header>
      <About />
      <Service />
      <Feature />
      <Contact />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
}

export default App;
