import React from "react";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import Service from "./components/service/service.component";
import Feature from "./components/feature/feature.component";
import Contact from "./components/contact/contact.component";
function App() {
  return (
    <React.Fragment>
      <header>
        <Hero />
      </header>
      <About />
      <Service />
      <Feature />
      <Contact />
    </React.Fragment>
  );
}

export default App;
