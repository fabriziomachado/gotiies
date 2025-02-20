import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#111827');
    } else {
      document.documentElement.classList.remove('dark');
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f9fafb');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        fixed top-3 right-4 z-[60] p-2 rounded-full transition-all
        ${isDark
          ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
        }
        md:top-4
      `}
      aria-label="Alternar tema"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}