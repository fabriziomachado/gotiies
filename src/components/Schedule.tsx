import { motion, AnimatePresence } from 'framer-motion';
import { schedule, tracks } from '../data';
import { Clock, Calendar, ArrowRight, User2, Linkedin, Github, Instagram, MapPin, CalendarDays } from 'lucide-react';
import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Modal } from './Modal';
import type { Speaker } from '../types';

export function Schedule() {
  const uniqueDates = [...new Set(schedule.map(item => item.date))];
  const [selectedDate, setSelectedDate] = useState(uniqueDates[0]);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filteredSchedule = schedule.filter(item => item.date === selectedDate);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <Modal
        isOpen={!!selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-6">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
              <img
                src={`https://i.pravatar.cc/150?u=${selectedSpeaker?.name}`}
                alt={selectedSpeaker?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {selectedSpeaker?.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {selectedSpeaker?.role}
              </p>
              <div className="flex gap-3 mt-4">
                {selectedSpeaker?.social?.linkedin && (
                  <a
                    href={selectedSpeaker.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {selectedSpeaker?.social?.github && (
                  <a
                    href={selectedSpeaker.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {selectedSpeaker?.social?.instagram && (
                  <a
                    href={selectedSpeaker.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/30 dark:hover:text-pink-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{selectedSpeaker?.bio}</p>
          </div>
        </div>
      </Modal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalendarDays className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-4xl font-bold dark:text-white">Programação</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Dois dias de conteúdo imperdível</p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-4 px-4">
            {uniqueDates.map((date) => (
              <motion.button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap flex-1
                  ${selectedDate === date
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2 justify-center">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {format(parseISO(date), "dd 'de' MMMM", { locale: ptBR })}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDate}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredSchedule.map((item, index) => {
              const track = tracks.find(t => t.id === item.track);
              const isSelected = selectedActivity === `${item.date}-${index}`;
              
              return (
                <motion.div
                  key={`${item.date}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-[13px] top-6 w-3 h-3 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 z-10" />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedActivity(isSelected ? null : `${item.date}-${index}`)}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 dark:shadow-gray-900/50 cursor-pointer ${
                      isSelected ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                            <Clock className="w-5 h-5" />
                            <span>{item.time}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-white text-sm ${track?.color}`}>
                            {track?.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <a
                            href={item.location.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.location.name}
                          </a>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                        
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {item.speakers.map((speaker) => (
                              <motion.div 
                                key={speaker.name}
                                className="flex items-center gap-2 cursor-pointer bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-full"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedSpeaker(speaker);
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 group">
                                  <img
                                    src={`https://i.pravatar.cc/150?u=${speaker.name}`}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <User2 className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{speaker.name}</span>
                              </motion.div>
                            ))}
                          </div>
                          
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedActivity(isSelected ? null : `${item.date}-${index}`);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            {isSelected ? 'Mostrar menos' : 'Saiba mais'}
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                            >
                              {item.details?.longDescription && (
                                <div className="mb-4">
                                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Descrição Detalhada</h4>
                                  <p className="text-gray-600 dark:text-gray-400">{item.details.longDescription}</p>
                                </div>
                              )}
                              
                              {item.details?.objectives && (
                                <div className="mb-4">
                                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Objetivos</h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {item.details.objectives.map((objective, i) => (
                                      <li key={i}>{objective}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {item.details?.prerequisites && (
                                <div className="mb-4">
                                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Pré-requisitos</h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {item.details.prerequisites.map((prerequisite, i) => (
                                      <li key={i}>{prerequisite}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {item.details?.materials && (
                                <div>
                                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Materiais Necessários</h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {item.details.materials.map((material, i) => (
                                      <li key={i}>{material}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}