import Layout from "./components/layout/Layout";

import Hero from "./components/sections/Hero";
import StatsStrip from "./components/sections/StatsStrip";
import ShopSection from "./components/sections/ShopSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import SocialSection from "./components/sections/SocialSection";
import ContactSection from "./components/sections/ContactSection";
import Credentials from "./components/sections/Credentials";

export default function App() {
  return (
    <Layout>
      <section id="home">
        <Hero />
        <StatsStrip />
      </section>

      <SkillsSection />
      <Credentials />
      {/* <ShopSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      <SocialSection />
      <ContactSection />
    </Layout>
  );
}
