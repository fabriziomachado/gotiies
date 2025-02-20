import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { photos } from '../data/photos';

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const photoRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get unique categories and count photos in each category
  const categoryStats = photos.reduce((acc, photo) => {
    acc[photo.category] = (acc[photo.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = ['Todas', ...Object.keys(categoryStats)];

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'Todas'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  // Required minimum swipe distance
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      navigatePhoto('next');
    }
    if (isRightSwipe) {
      navigatePhoto('prev');
    }
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    setSelectedPhoto(current => {
      if (direction === 'prev') {
        return current === 0 ? filteredPhotos.length - 1 : current - 1;
      } else {
        return current === filteredPhotos.length - 1 ? 0 : current + 1;
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') navigatePhoto('prev');
    if (e.key === 'ArrowRight') navigatePhoto('next');
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    
    // Prevent image dragging
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="galeria">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/30 dark:via-fuchsia-950/30 dark:to-pink-950/30" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070')] opacity-5 mix-blend-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-4xl font-bold dark:text-white">Galeria</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Momentos marcantes do nosso evento
          </p>

          {/* Updated Categories with overlapping badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
            {categories.map((category) => {
              const count = category === 'Todas' ? photos.length : categoryStats[category];
              const isSelected = selectedCategory === category;
              
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Main button */}
                  <div className={`
                    relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${isSelected
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}>
                    {category}
                  </div>

                  {/* Overlapping badge */}
                  <div className={`
                    absolute -top-2 -right-2 z-20 min-w-[22px] h-[22px] 
                    flex items-center justify-center px-1.5 
                    rounded-full text-xs font-bold
                    transform transition-all duration-200
                    ${isSelected
                      ? 'bg-white text-purple-600 shadow-lg scale-110'
                      : 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 group-hover:scale-110'
                    }
                  `}>
                    {count}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Gallery */}
        <div 
          ref={photoRef}
          className="relative w-full aspect-square md:hidden rounded-2xl overflow-hidden shadow-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <img
                  src={filteredPhotos[selectedPhoto].url}
                  alt={filteredPhotos[selectedPhoto].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredPhotos[selectedPhoto].title}
                  </h3>
                  <p className="text-gray-200">
                    {filteredPhotos[selectedPhoto].description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                      {filteredPhotos[selectedPhoto].category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Indicators */}
          <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
            {filteredPhotos.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedPhoto
                    ? 'bg-white w-3'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Horizontal Gallery */}
        <div className="hidden md:block relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollGallery('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollGallery('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className={`
              flex overflow-x-auto scrollbar-hide scroll-smooth gap-6 pb-4 cursor-grab
              ${isDragging ? 'cursor-grabbing select-none' : ''}
            `}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-[500px] group cursor-pointer"
                onClick={() => !isDragging && setSelectedPhoto(index)}
              >
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                    <p className="text-gray-200 text-sm">{photo.description}</p>
                    <div className="mt-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}