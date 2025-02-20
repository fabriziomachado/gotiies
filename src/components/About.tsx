import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export function About() {
  const logos = [
    { name: 'Católica SC', src: 'https://acafe.org.br/arquivos/logos/catolica.png' },
    { name: 'FURB', src: 'https://acafe.org.br/arquivos/logos/furb.png' },
    { name: 'UDESC', src: 'https://acafe.org.br/arquivos/logos/udesc.png' },
    { name: 'UNC', src: 'https://acafe.org.br/arquivos/logos/unc.png' },
    { name: 'UNESC', src: 'https://acafe.org.br/arquivos/logos/unesc.png' },
    { name: 'UNIARP', src: 'https://acafe.org.br/arquivos/logos/uniarp.png' },
    { name: 'UNIBAVE', src: 'https://acafe.org.br/arquivos/logos/unibave.png' },
    { name: 'UNIDAVI', src: 'https://acafe.org.br/arquivos/logos/unidave.png' },
    { name: 'UNIFEBE', src: 'https://acafe.org.br/arquivos/logos/unifebe.png' },
    { name: 'UNIPLAC', src: 'https://acafe.org.br/arquivos/logos/uniplac.png' },
    { name: 'UNIVALI', src: 'https://acafe.org.br/arquivos/logos/univali.png' },
    { name: 'UNIVILLE', src: 'https://acafe.org.br/arquivos/logos/univille.png' },
    { name: 'UNO', src: 'https://acafe.org.br/arquivos/logos/uno.png' },
    { name: 'UNOESC', src: 'https://acafe.org.br/arquivos/logos/unoesc.png' },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-goti-green-50 via-goti-blue-50 to-goti-green-50 dark:from-goti-green-950/30 dark:via-goti-blue-950/30 dark:to-goti-green-950/30" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Info className="w-8 h-8 text-goti-green-500 dark:text-goti-green-400" />
            <h2 className="text-4xl font-bold dark:text-white">Sobre o Evento</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Conheça mais sobre nossa iniciativa</p>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-goti-green-600/20 to-goti-blue-600/20 dark:from-goti-green-400/10 dark:to-goti-blue-400/10 rounded-2xl transform -rotate-1" />
            <div className="relative bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                O evento reunirá especialistas renomados, cases de sucesso e as últimas tendências em tecnologia.
                Prepare-se para uma experiência completa e inspiradora que transformará sua visão sobre o futuro da educação.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-24 sm:w-64 sm:h-32 bg-white dark:bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:scale-105 transition-transform">
              <img
                src="https://www.acafe.org.br/site/imagens/logo.png"
                alt="ACAFE"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center px-2 sm:px-4"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative w-full aspect-[3/2] max-w-[180px] bg-white dark:bg-white p-3 sm:p-4 rounded-xl hover:scale-105 transition-transform group shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-goti-green-500/0 to-goti-blue-500/0 group-hover:from-goti-green-500/5 group-hover:to-goti-blue-500/5 rounded-xl transition-colors" />
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}