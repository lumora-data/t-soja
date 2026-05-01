'use client';

import { motion } from 'motion/react';
import { Rocket, TrendingUp, ShieldCheck, Award, Lightbulb, Heart } from 'lucide-react';
import { SITE_INFO } from '../constants';

export default function About() {
  return (
    <div id="about-page">
      <section className="relative py-24 md:py-32 bg-green-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110 bg-[url('/images/equipe.webp')] bg-cover bg-center grayscale" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            À propos de <span className="italic">T-SOJA</span>
          </motion.h1>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center"
            >
                <p className="text-xl md:text-3xl text-gray-900 font-medium leading-relaxed">
                    T-SOJA Processing Factory est une entreprise agroalimentaire camerounaise spécialisée dans la culture, la transformation et la commercialisation de produits issus du soja, du pois d’Angole et du mil.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Notre mission est de valoriser les matières premières locales en les transformant en produits alimentaires naturels, nutritifs et accessibles. Nous voulons contribuer à une meilleure alimentation tout en soutenant la production locale et l’économie agroalimentaire camerounaise.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center space-y-6 transition-all shadow-sm hover:shadow-xl"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="text-green-600 w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Notre Vision</h3>
                    <p className="text-gray-600">Devenir une référence camerounaise dans la transformation agroalimentaire naturelle, en répondant aux besoins des ménages et professionnels.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-green-600 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-green-500 shadow-xl shadow-green-100 flex flex-col items-center text-center space-y-6 transition-all"
                >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Rocket className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Notre Mission</h3>
                    <p className="text-green-50">Produire et commercialiser des produits agroalimentaires naturels qui apportent nutrition, énergie et bien-être aux consommateurs.</p>
                </motion.div>
            </div>
          </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold italic mb-12 md:mb-20"
            >
              Nos valeurs clés
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: ShieldCheck, title: "Naturalité", desc: "Produits simples issus de matières premières naturelles." },
                    { icon: Award, title: "Qualité", desc: "Nous accordons une grande importance à la sélection, la transformation et la présentation de nos produits." },
                    { icon: Lightbulb, title: "Innovation locale", desc: "Modernisation des ressources agricoles camerounaises." },
                    { icon: Heart, title: "Bien-être", desc: "Apport de valeur nutritionnelle réelle à chaque bouchée." },
                ].map((val, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left group"
                    >
                        <val.icon className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                        <p className="text-gray-400 text-sm">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
              <span className="text-green-600 font-black text-sm tracking-[0.3em] uppercase block mb-6">Notre Slogan</span>
              <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-8">{SITE_INFO.slogan}</h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light italic">"{SITE_INFO.sloganFr}"</p>
          </div>
      </section>
    </div>
  );
}
