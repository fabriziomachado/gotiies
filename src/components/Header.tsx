import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [showTopBar, setShowTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        setShowTopBar(headerBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to force show top bar
  const forceShowTopBar = () => {
    setShowTopBar(true);
  };

  // Make the function available globally
  useEffect(() => {
    (window as any).forceShowTopBar = forceShowTopBar;
    return () => {
      delete (window as any).forceShowTopBar;
    };
  }, []);

  return (
    <>
      {/* Mobile fixed top bar */}
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-sm border-b border-white/10 md:hidden"
          >
            <div className="flex items-center justify-center px-4 py-3">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/logo-goti-ies-1.png"
                  alt="Logo GoTI.IES"
                  className="w-8 h-8 object-contain"
                />
                <img 
                  src="/assets/logo-goti-ies-2.png"
                  alt="Título GoTI.IES"
                  className="h-5 object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex items-center justify-center bg-[#0B1120] overflow-hidden"
      >
        {/* Container principal */}
        <div className="relative w-full">
          {/* Container da imagem com proporção fixa */}
          <div className="relative w-full">
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-transparent to-[#0B1120]/80 pointer-events-none z-10" />

            {/* Container dos logos */}
            <div className="relative flex flex-col items-center gap-4 py-6 md:py-10">
              {/* Primeiro logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center"
              >
                <img 
                  src="/assets/logo-goti-ies-1.png"
                  alt="Logo GoTI.IES"
                  className="w-[60%] max-w-[300px] h-auto object-contain"
                />
              </motion.div>

              {/* Segundo logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <img 
                  src="/assets/logo-goti-ies-2.png"
                  alt="Título GoTI.IES"
                  className="w-[70%] max-w-[400px] h-auto object-contain"
                />
              </motion.div>

              {/* Informações de data e local */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-white/90"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-goti-green-500" />
                  <span className="text-base">21 e 22 de Março, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-goti-green-500" />
                  <span className="text-base">UNESC, Criciúma - SC</span>
                </div>
              </motion.div>
            </div>

            {/* Decoração de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-goti-green-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          </div>
        </div>
      </motion.header>
    </>
  );
}