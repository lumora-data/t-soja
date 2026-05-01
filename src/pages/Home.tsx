'use client';

import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, CheckCircle2, ShoppingBag, MessageSquare, Briefcase, Award, Zap, Globe, Leaf } from 'lucide-react';
import Link from 'next/link';
import { PRODUCTS, SITE_INFO } from '../constants';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div id="home-page" className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "linear-gradient(45deg, #064e3b 0%, #065f46 50%, #047857 100%)",
              "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)",
              "linear-gradient(225deg, #047857 0%, #059669 50%, #064e3b 100%)",
              "linear-gradient(315deg, #059669 0%, #064e3b 50%, #065f46 100%)",
              "linear-gradient(45deg, #064e3b 0%, #065f46 50%, #047857 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
          
          {/* Decorative floating blobs */}
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute top-1/4 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              x: [0, -120, 0],
              y: [0, -80, 0],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-1.5 rounded-full bg-green-600/20 backdrop-blur-md text-green-400 text-sm font-bold tracking-wider uppercase mb-6 border border-green-500/30"
            >
              Naturel & Nutritif
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              T-SOJA — Des produits agroalimentaires <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">naturels</span> à base de soja
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              Nous transformons le soja, le pois d’Angole et le mil en produits nutritifs, naturels et accessibles pour accompagner votre alimentation au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/produits"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-green-900/20 group hover:scale-[1.02] active:scale-95"
              >
                Découvrir nos produits
                <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={SITE_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-2xl transition-all hover:scale-[1.02] active:scale-95"
              >
                Commander sur WhatsApp
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
            <div className="w-1 h-12 rounded-full bg-white/20 relative overflow-hidden">
                <motion.div
                    animate={{ y: [0, 40, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-1/3 bg-green-500 rounded-full"
                />
            </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img
                src={SITE_INFO.teamImage}
                alt="Équipe T-SOJA"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-900/10 hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Une alimentation naturelle, locale et nutritive
                </h2>
                <div className="h-1 w-20 bg-green-600 rounded-full" />
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                T-SOJA Processing Factory est une entreprise basée au Cameroun. Chez nous, nous croyons qu’une bonne nutrition commence par des produits simples, naturels et bien transformés. Nos produits sont conçus à partir de matières premières sélectionnées avec soin afin de préserver leur goût, leur qualité et leurs apports nutritionnels.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "100% naturel",
                  "Transformés au Cameroun",
                  "Gamme variée de produits",
                  "Pour toute la famille",
                  "Pour les professionnels",
                  "Disponible partout au pays"
                ].map((item, id) => (
                  <motion.div 
                    key={id} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: id * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="text-green-600 w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Summary */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <h2 className="text-4xl font-bold text-gray-900">Nos produits phares</h2>
            <p className="text-gray-600 text-lg">
              Découvrez notre gamme de produits à base de soja, pois d’Angole et mil, conçue pour apporter énergie, goût et bien-être au quotidien.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRODUCTS.slice(0, 6).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col grow space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed grow">{product.description}</p>
                  <a
                    href={SITE_INFO.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all"
                  >
                    Commander <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
                href="/produits"
                className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 font-bold py-4 px-10 rounded-2xl hover:bg-green-600 hover:text-white transition-all shadow-lg shadow-green-100 active:scale-95"
            >
                Voir toute la gamme
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why choose T-SOJA */}
      <section className="py-16 md:py-24 bg-green-600 text-white relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-5" 
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Pourquoi choisir T-SOJA ?</h2>
              <p className="text-xl text-green-50/80 leading-relaxed">
                T-SOJA met en avant une transformation locale, une meilleure valorisation des matières premières camerounaises et une volonté de rendre les produits nutritifs accessibles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Award, title: "Qualité contrôlée", desc: "Produits transformés avec attention pour une expérience optimale." },
                  { icon: Leaf, title: "Produits naturels", desc: "Matières premières issues de l'agriculture locale." },
                  { icon: Zap, title: "Nutrition & Bien-être", desc: "Pensés pour apporter de la valeur nutritionnelle au quotidien." },
                  { icon: Globe, title: "Disponibilité locale", desc: "Présents à Douala, Yaoundé et partout au Cameroun." },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-green-200" />
                    </div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-sm text-green-100/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
                <img 
                    src="/images/produits/boisson-rafraichissante.png" 
                    className="rounded-3xl shadow-2xl border-8 border-white/10" 
                    alt="Qualité des produits T-SOJA"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professionals section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent" />
                <div className="relative z-10 space-y-8">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto" />
                    </motion.div>
                    <h2 className="text-2xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">Vous êtes une boutique, supermarché, restaurant ou revendeur ?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        T-SOJA accompagne aussi les professionnels qui souhaitent proposer des produits agroalimentaires locaux, naturels et appréciés par les consommateurs.
                    </p>
                    <div className="pt-6">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-2xl transition-all shadow-xl shadow-green-900/40 inline-flex items-center justify-center hover:scale-[1.05] active:scale-95"
                        >
                            Demander une offre professionnelle
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
