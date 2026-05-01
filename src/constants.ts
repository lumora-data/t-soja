import productsData from './data/products.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  usage: string;
  target: string;
  image: string;
};

export const PRODUCTS: Product[] = productsData as Product[];

export const SITE_INFO = {
  name: 'T-SOJA',
  fullName: 'T-SOJA Processing Factory',
  slogan: 'Value your Nutrition, Value your Well-being',
  sloganFr: 'Valorisez votre nutrition, valorisez votre bien-être',
  logo: '/images/logo.png',
  teamImage: '/images/equipe.webp',
  address: 'Pk40, route de Yabassi, Douala, Cameroun',
  phone: '(+237) 654 242 311',
  phoneAlt: '6 50 23 46 64',
  email: 'hilarylanka52@gmail.com',
  website: 'tsojanutrition.com',
  whatsappLink: 'https://wa.me/237654242311?text=Bonjour%20T-SOJA,%20je%20suis%20intéressé(e)%20par%20vos%20produits.',
};
