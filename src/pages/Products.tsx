'use client';

import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, SITE_INFO } from '../constants';

export default function Products() {
  return (
    <div id="products-page">
      <section className="bg-gray-900 pt-24 pb-16 md:pt-32 md:pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nos Produits Naturels
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une sélection rigoureuse de produits issus du soja, du pois d’Angole et du mil pour une nutrition saine et complète.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col lg:items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-square lg:aspect-auto lg:h-[500px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-green-600 font-bold text-sm tracking-widest uppercase">
                  <Star className="w-4 h-4 fill-current" />
                  Produit Phare
                </div>
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h2>
                <div className="h-1.5 w-20 bg-green-600 rounded-full" />
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {product.description}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={SITE_INFO.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto justify-center flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-green-900/20 group"
                  >
                    Commander maintenant
                    <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </a>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto justify-center flex items-center gap-2 border-2 border-gray-200 hover:border-green-600 hover:text-green-600 text-gray-700 font-bold py-4 px-8 rounded-2xl transition-all"
                  >
                    Plus d'infos
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4"
          >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Besoin d'une commande personnalisée ?</h2>
              <p className="text-xl text-gray-600 mb-12">
                  Nous fournissons aussi bien les familles que les commerces de gros. Contactez-nous pour discuter de vos besoins spécifiques.
              </p>
              <a
                href={SITE_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                  Discuter avec l'équipe commerciale
              </a>
          </motion.div>
      </section>
    </div>
  );
}
