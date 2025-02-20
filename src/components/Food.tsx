import { motion } from 'framer-motion';
import { Instagram, MapPin, Globe, Bed, UtensilsCrossed } from 'lucide-react';

const restaurants = [
  {
    name: 'Rua Alecrim',
    description: 'Restaurante e café com ambiente acolhedor e cardápio variado.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2940',
    instagram: 'https://www.instagram.com/rualecrimunesc',
    location: 'UNESC - Criciúma, SC',
    mapUrl: 'https://maps.app.goo.gl/eQTYHeqnzR3swLyt5'
  },
  {
    name: 'Cantinho da Massa',
    description: 'Especializado em massas artesanais e pratos da culinária italiana.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2932',
    website: 'https://www.cantinhodamassa.com.br/',
    location: 'Próximo à UNESC',
    mapUrl: 'https://maps.app.goo.gl/eQTYHeqnzR3swLyt5'
  },
  {
    name: 'Saint Bier',
    description: 'Cervejaria artesanal com ambiente descontraído e cardápio contemporâneo.',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2940',
    website: 'https://www.saintbier.com/',
    location: 'Criciúma, SC',
    mapUrl: 'https://maps.app.goo.gl/WCu7xZN6FNL7LSda7'
  }
];

const hotels = [
  {
    name: 'Tru by Hilton Criciúma',
    description: 'Hotel moderno com localização privilegiada, oferecendo conforto e praticidade.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2940',
    website: 'https://www.hilton.com/en/hotels/ccmscru-tru-criciuma/',
    location: 'Centro, Criciúma, SC',
    mapUrl: 'https://maps.app.goo.gl/eQTYHeqnzR3swLyt5',
    features: [
      'Wi-Fi gratuito',
      'Academia 24h',
      'Café da manhã incluso',
      'Estacionamento'
    ]
  }
];

export function Food() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-yellow-950/30" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940')] opacity-5 mix-blend-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto space-y-32">
        {/* Restaurants Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <UtensilsCrossed className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              <h2 className="text-4xl font-bold dark:text-white">Alimentação</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Conheça algumas opções de restaurantes próximos ao evento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{restaurant.name}</h3>
                    <p className="text-gray-200 text-sm">{restaurant.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <a
                      href={restaurant.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {restaurant.location}
                    </a>
                  </div>
                  
                  <div className="flex gap-2 ml-auto">
                    {restaurant.instagram && (
                      <a
                        href={restaurant.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                        aria-label={`Instagram do ${restaurant.name}`}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {restaurant.website && (
                      <a
                        href={restaurant.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label={`Website do ${restaurant.name}`}
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hotels Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bed className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-4xl font-bold dark:text-white">Hospedagem</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Opções de hotéis para sua estadia durante o evento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group"
              >
                <div className="relative h-72">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{hotel.name}</h3>
                    <p className="text-gray-200">{hotel.description}</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <a
                      href={hotel.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {hotel.location}
                    </a>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Comodidades</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`Website do ${hotel.name}`}
                    >
                      <Globe className="w-5 h-5" />
                    </a>
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