export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  material: string;
  dimensions: string;
  leadTime: string;
  price: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Ahşap Duvar Saati',
    description: 'Doğal huş ağacından, 40 cm çapında lazer kesim duvar saati.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3107/3107561.png',
    category: 'Duvar Dekoru',
    material: 'Huş ağacı, UV baskı',
    dimensions: 'Ø 40 cm',
    leadTime: '5 iş günü',
    price: '₺1.190',
  },
  {
    id: '2',
    name: 'Dekoratif Duvar Panosu',
    description: 'Karma renkli huş katmanlarından, 45×45 cm ölçüsünde dekoratif pano.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/706/706164.png',
    category: 'Pano',
    material: 'Huş panel, akrilik boya',
    dimensions: '45 × 45 cm',
    leadTime: '7 iş günü',
    price: '₺890',
  },
  {
    id: '3',
    name: 'Kişiye Özel Anahtarlık',
    description: 'İsim kazımalı, 3’lü set halinde gelen doğal ahşap anahtarlık.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    category: 'Aksesuar',
    material: 'Huş kontraplak, mat vernik',
    dimensions: '3 × 9 cm',
    leadTime: '3 iş günü',
    price: '₺290',
  },
];

export default products;
