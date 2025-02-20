import React from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { Food } from './components/Food';
import { Gallery } from './components/Gallery';
import { Sponsors } from './components/Sponsors';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <Header />
      <Navigation />
      <div id="sobre">
        <About />
      </div>
      <div id="programacao">
        <Schedule />
      </div>
      <div id="alimentacao">
        <Food />
      </div>
      <div id="galeria">
        <Gallery />
      </div>
      <div id="patrocinadores">
        <Sponsors />
      </div>
    </div>
  );
}

export default App;