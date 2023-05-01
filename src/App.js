import React from "react";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import Service from "./components/service/service.component";
import Feature from "./components/feature/feature.component";

function App() {
  return (
    <React.Fragment>
      <header>
        <Hero />
      </header>
      <About />
      <Service />
      <Feature />
    </React.Fragment>
  );
}

export default App;
