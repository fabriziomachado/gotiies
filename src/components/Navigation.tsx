import { motion, AnimatePresence } from 'framer-motion';
import { Info, CalendarDays, UtensilsCrossed, Camera, Handshake } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { label: 'Sobre', href: '#sobre', icon: Info },
    { label: 'Programação', href: '#programacao', icon: CalendarDays },
    { label: 'Alimentação', href: '#alimentacao', icon: UtensilsCrossed },
    { label: 'Galeria', href: '#galeria', icon: Camera },
    { label: 'Patrocinadores', href: '#patrocinadores', icon: Handshake },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // If it's the "Sobre" section and we're on mobile, show the top bar
      if (href === '#sobre' && window.innerWidth < 768) {
        (window as any).forceShowTopBar?.();
      }
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <ul className="flex space-x-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`relative flex items-center gap-2 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-goti-green-500 dark:text-goti-green-400'
                          : 'text-gray-600 dark:text-gray-300 hover:text-goti-green-500 dark:hover:text-goti-green-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-goti-green-500 dark:bg-goti-green-400 rounded-full"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-[0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[0_-1px_0_rgba(255,255,255,0.1)]"
      >
        <div className="px-4 py-3">
          <ul className="flex items-center justify-around">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="relative p-2 group"
                  >
                    <span className={`
                      relative flex flex-col items-center gap-1 transition-colors
                      ${isActive
                        ? 'text-goti-green-500 dark:text-goti-green-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-goti-green-500 dark:hover:text-goti-green-400'
                      }
                    `}>
                      <Icon className="w-7 h-7" />
                      <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4">
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileSection"
                          className="absolute -top-2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 bg-goti-green-500 dark:bg-goti-green-400 rounded-full"
                        />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}