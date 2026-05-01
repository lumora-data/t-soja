'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '../constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page">
      <section className="bg-green-700 py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            Contactez-nous
          </motion.h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Une question, une commande ou un projet de partenariat ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Nos coordonnées</h2>
                <p className="text-gray-600 leading-relaxed max-w-md">
                    N'hésitez pas à nous appeler ou nous envoyer un message via WhatsApp pour une réponse plus rapide.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Téléphone / WhatsApp", value: SITE_INFO.phone },
                  { icon: Mail, label: "Adresse Email", value: SITE_INFO.email },
                  { icon: MapPin, label: "Siège Social", value: SITE_INFO.address },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                      <item.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg md:text-xl font-bold text-gray-900 break-words">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zones de livraison</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous livrons nos produits à Douala, Yaoundé et dans toutes les régions du Cameroun selon les modalités convenues lors de la commande.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-green-900/5 border border-gray-100"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Message envoyé !</h2>
                  <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-green-600 font-bold hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
                      <input
                        required
                        className="w-full bg-gray-50 border-gray-100 focus:border-green-500 focus:ring-green-500 rounded-2xl p-4 md:p-5 transition-all text-sm md:text-base"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Téléphone</label>
                      <input
                        required
                        className="w-full bg-gray-50 border-gray-100 focus:border-green-500 focus:ring-green-500 rounded-2xl p-4 md:p-5 transition-all text-sm md:text-base"
                        placeholder="Votre numéro"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Sujet</label>
                    <input
                      required
                      className="w-full bg-gray-50 border-gray-100 focus:border-green-500 focus:ring-green-500 rounded-2xl p-4 md:p-5 transition-all text-sm md:text-base"
                      placeholder="Commande, Partenariat, Info..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Votre message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-gray-50 border-gray-100 focus:border-green-500 focus:ring-green-500 rounded-2xl p-4 md:p-5 transition-all resize-none text-sm md:text-base"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 md:py-5 rounded-2xl transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-3 group"
                  >
                    Envoyer le message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
