import { useState } from "react";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LiveSites from "./components/LiveSites";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Slide from "./components/Slide";
import TableOfContents from "./components/TableOfContents";
import type { ProjectCategory, TagId } from "./data/content";
import { useTheme } from "./useTheme";

function toggleTag(tags: TagId[], tag: TagId): TagId[] {
  return tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTags, setActiveTags] = useState<TagId[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const handleToggleTag = (tag: TagId) => {
    setActiveTags((prev) => toggleTag(prev, tag));
  };

  const handleSkillSelect = (tag: TagId) => {
    setActiveTags((prev) => toggleTag(prev, tag));
    setActiveCategory("all");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-text md:flex md:h-screen md:flex-col md:overflow-hidden">
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <TableOfContents />
      <main className="no-scrollbar no-scroll-anchor md:flex-1 md:scroll-smooth md:snap-y md:snap-mandatory md:overflow-y-scroll">
        <Slide center>
          <Hero />
        </Slide>
        <Slide center>
          <Profile />
        </Slide>
        <Slide center>
          <Experience />
        </Slide>
        <Slide>
          <Projects
            activeTags={activeTags}
            onToggleTag={handleToggleTag}
            onClearTags={() => setActiveTags([])}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </Slide>
        <Slide center>
          <Skills onSkillSelect={handleSkillSelect} />
        </Slide>
        <Slide center>
          <LiveSites />
        </Slide>
        <Slide center>
          <Blog />
        </Slide>
        <Slide center>
          <Contact />
          <Footer />
        </Slide>
      </main>
    </div>
  );
}
