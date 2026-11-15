import React from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Arsenal } from './components/Arsenal';
import { Projects } from './components/Projects';
import { BeyondCode } from './components/BeyondCode';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 flex flex-col selection:bg-accent-cyan/20 selection:text-accent-cyan">
      {/* Ambient Mouse Tracking Light & Grid */}
      <BackgroundGlow />

      {/* Floating Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Arsenal />
        <Projects />
        <BeyondCode />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
