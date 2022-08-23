import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { PortfolioProvider } from "./Context/Context";

import { heroData, projectsData, footerData } from "./Mock/Data";

function App() {
  const [hero, setHero] = useState({});
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setProjects({ ...projectsData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, projects, footer }}>
      <Hero />
      <skills />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
