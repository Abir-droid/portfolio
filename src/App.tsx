import React from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GitHubActivity } from './components/GitHubActivity';
import { Projects } from './components/Projects';
import { SystemsLab } from './components/SystemsLab';
import { TechLandscape } from './components/TechLandscape';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 flex flex-col selection:bg-accent-cyan/20 selection:text-accent-cyan">
      {/* Ambient Mouse Tracking Light & Fine Subtle Grid */}
      <BackgroundGlow />

      {/* Floating Header & Scroll Progress */}
      <Navbar />

      {/* Main Experience Stream */}
      <main className="flex-1 relative z-10">
        {/* 01 — INTRODUCTION */}
        <Hero />

        {/* 02 — GITHUB / ACTIVITY */}
        <GitHubActivity />

        {/* 03 — SELECTED BUILDS */}
        <Projects />

        {/* 04 — SYSTEMS LAB */}
        <SystemsLab />

        {/* 05 — TECHNOLOGY LANDSCAPE */}
        <TechLandscape />

        {/* 06 — ABOUT / JOURNEY */}
        <Journey />

        {/* 07 — CONTACT */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
