import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { SITE_INFO } from '../constants';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={SITE_INFO.logo}
                alt="Logo T-SOJA"
                width={40}
                height={40}
                className="rounded-lg ring-1 ring-white/20"
              />
              <span className="font-bold text-2xl tracking-tight text-white">{SITE_INFO.name}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              T-SOJA Processing Factory est une entreprise camerounaise dédiée à transformer les richesses locales en nutrition de qualité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Plan du site</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/produits" className="text-gray-400 hover:text-white transition-colors">Produits</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-green-500 shrink-0" />
                <span className="break-words">{SITE_INFO.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <span className="break-all">{SITE_INFO.phone} / {SITE_INFO.phoneAlt}</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <span className="break-all">{SITE_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Commander</h4>
            <p className="text-gray-400 text-sm">Prêt à améliorer votre nutrition ? Nos conseillers sont à votre écoute.</p>
            <a
              href={SITE_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} {SITE_INFO.fullName}. Tous droits réservés.</p>
          <p>{SITE_INFO.sloganFr}</p>
        </div>
      </div>
    </footer>
  );
}
